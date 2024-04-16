import React, { useContext, useState } from "react";
import styled from "styled-components";
import { colors, fontsWeights } from "../constants/styles";
import Meal from "./Meal";
import useFetch from "../hooks/fetch";
import API from "../constants/api";
import { MealSauceContext } from "../App";

const OptionContainer = styled.div``;

const OptionTitle = styled.p`
  color: ${colors.base};
  font-weight: ${fontsWeights.bold};
  font-size: 4rem;

  margin-bottom: 4rem;
`;

const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
`;

const MealOptionList = ({
  title,
  filter,
  handleChoice,
  handleActive,
  idPrefix = null,
  optionType
}) => {

  const { data } = useFetch(API.MEALS);
  const optionsData = data.filter((data) => data.category === filter);

  const [selected, setSelected] = useState(null);
  const [sauceOptions, setSauceOptions] = useContext(MealSauceContext);

  const handleSelect = (e, id) => {
      handleChoice(e);
      setSelected(id)
      if (optionType === "sauce") {
          setSauceOptions({
          ...sauceOptions,
          [idPrefix]: e.target.value
        })
      }
  }

  return (
    <OptionContainer>
      <OptionTitle>{title}</OptionTitle>
      <List>
        {optionsData.map((option) => {
          const image = require(`../assets/images/meals/${option.image}`);

          const id = idPrefix ? `${idPrefix}-${option.id}` : option.id;

          return (
            <Meal
              handleFunction={handleSelect}
              key={id}
              scale="14rem"
              name={option.label}
              id={id}
              image={image}
              handleActive={selected === id}
              value={option.name}
            />
          );
        })}
      </List>
    </OptionContainer>
  );
};

export default MealOptionList;
