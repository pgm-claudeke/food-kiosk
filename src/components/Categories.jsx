import React, { useState} from "react";
import styled from "styled-components";
import { colors, fontsWeights, radius } from "../constants/styles";
import useFetch from "../hooks/fetch";
import {motion } from "framer-motion";
import API from "../constants/api";
import Loading from "./Loading";
import Error from "./Error";

const CategoryList = styled(motion.ul)`
  width: 22%;
  list-style: none;
  padding-left: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  overflow: scroll;
`;

const CategoryItem = styled(motion.li)`
    :first-child {
        margin-top: 1rem;
    };

    :last-child {
        margin-bottom: 1rem;
    }
`;

const CategoryBtn = styled(motion.button)`
  min-height: 13.3rem;
  width: ${(props) => (props.isSelected ? "100%" : "92%")};
  background-color: ${(props) =>
    props.isSelected ? colors.secondary : colors.primary};
  border: none;
  border-radius: 0rem ${radius.main} ${radius.main} 0rem;
  padding: 2rem 0rem;
  margin: 0;

  color: ${colors.base};
  font-size: 2rem;
  font-weight: ${fontsWeights.bold};

  p {
    margin: 0;
  }

  > * {
    pointer-events: none;
  }
`;

const CategoryContainer = styled.div`
  margin: 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const CategoryImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ImageContainer = styled.div`
  width: 9.6rem;
  height: 9.6rem;
  overflow: hidden;
`;

const Categories = ({ handleMenu }) => {
  const { data, loading, error } = useFetch(API.CATEGORIES);
  const [selected, setSelected] = useState(null);


  if (loading) return <Loading/>;

  if (error) return <Error/>;

  return (
    <CategoryList>
      {data.map((data, index) => {
        const image = require("../assets/images/categories/" + data.image);
        return (
          <CategoryItem onClick={() => setSelected(data.id)} key={data.name} initial={{x: '-20rem'}} animate={{x: 0}} transition={{type: "spring", damping: 20, bounce: 0.8, mass: 0.95, ease: 'easeOut', delay: index * 0.3}}>
            <CategoryBtn
              isSelected={selected === data.id}
              onClick={handleMenu}
              value={data.name}
            >
              <CategoryContainer>
                <ImageContainer>
                  <CategoryImage src={image} />
                </ImageContainer>
                <p>{data.name}</p>
              </CategoryContainer>
            </CategoryBtn>
          </CategoryItem>
        );
      })}
    </CategoryList>
  );
};

export default Categories;
