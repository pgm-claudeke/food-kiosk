import React, { useState } from "react";
import styled from "styled-components";
import {
  Categories,
  Header,
  CurrentOrder,
  Meals,
  MealType,
  MealOptions,
  Loading,
  Error,
} from "../components";
import useFetch from "../hooks/fetch";
import { pageSwitch } from "../constants/animations";
import { AnimatePresence, motion } from "framer-motion";
import { colors } from "../constants/styles";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 70vh;
  width: 100%;
  background-color: ${colors.base};
`;

const Menu = () => {
  const [category, setCategory] = useState(null);
  const [filter, setFilter] = useState(null);

  const [types, setTypes] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const [options, setOptions] = useState(null);

  const { data, loading, error } = useFetch(
    "https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json"
  );

  if (loading) return <Loading />;
  if (error) return <Error/>

  const handleMenuList = (e) => {
    setCategory(e.target.value);
    setFilter(e.target.value.toLowerCase());
  };

  const handleMealTypes = (e, id) => {
    const selectedMeal = data.find((data) => data.id === id);
    setTypes(selectedMeal.types);
    setSelectedMeal(selectedMeal.name);
    setSelectedMealId(id);

    if (!selectedMeal.types) {
      setOptions(selectedMeal);
    }
  };

  const handleClose = () => {
    setTypes(null);
  };

  const handleRedirect = (e, id) => {
    const selectedMeal = data.find((data) => data.id === selectedMealId);
    const mealTypes = selectedMeal.types;
    const selectedType = mealTypes.find((type) => type.id === id);

    setOptions(selectedType);
  };

  const handleCloseOptions = () => {
    setOptions(null);
  };

  const handleModals = (e) => {
    setOptions(null);
    setTypes(null);
  };

  return (
    <motion.div variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
      <Header />
      <MenuContainer>
        <Categories handleMenu={handleMenuList} />
        <AnimatePresence exitBeforeEnter>
            {category && (
              <Meals
                key={filter}
                category={category}
                filter={filter}
                handleFunction={handleMealTypes}
              />
            )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
            {types && (
              <MealType
                handleClose={handleClose}
                data={types}
                mealName={selectedMeal}
                handleFunction={handleRedirect}
              />
            )}
        </AnimatePresence>
      </MenuContainer>
      <CurrentOrder />
      <AnimatePresence exitBeforeEnter>
      {options && (
        <MealOptions
          data={options}
          handleClose={handleCloseOptions}
          key={options}
          handleModals={handleModals}
          mealInfo={options}
        />
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Menu;
