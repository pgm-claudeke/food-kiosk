import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import useFetch from '../hooks/fetch';
import logo from '../assets/images/logos/Logo.jpg';
import Meal from './Meal';
import { motion } from "framer-motion"

const MealsContainer = styled(motion.div)`
    overflow: hidden;
    width: 74%;
    max-height: 90%;
    background-color: ${colors.secondary};
    border-radius: ${radius.main} 0rem 0rem ${radius.main};
    padding: 3rem 4rem;
`;

const MealsTitle = styled.p`
    color: ${colors.base};
    font-size: 5rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 4rem;
`;

const MealsList = styled.ul`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(3, 33%);
    justify-items: start;
    row-gap: 2rem;
`;

const sideMotion = {
    hidden: {
        x: '100rem'
    }, 
    show: {
        x: 0,
        transition: {
            type: 'Tween', 
            ease: "easeOut",
            duration: 0.4
        }
    },
    exit: {
        x: '100rem',
        transition: {
            type: 'Tween', 
            ease: "easeOut",
            duration: 0.4
        }
    }
}

const Meals = ({category, filter, handleFunction}) => {
    const {data} = useFetch('https://pgm-claudeke.github.io/eindopdracht-food-kiosk/meals.json');

    const filteredData = data.filter(data => data.category === filter);

  return (
    <MealsContainer variants={sideMotion} initial="hidden" animate="show" exit="exit">
        <MealsTitle>{category}</MealsTitle>
            <MealsList>
                {
                    filteredData.map(data => {
                        const image = require(`../assets/images/meals/${data.image}`);

                        if(!image) {
                            return logo
                        }

                        return(
                        <Meal key={data.id} image={image}  name={data.label} handleFunction={handleFunction} id={data.id}/>
                        )
                    })
                }
            </MealsList>
    </MealsContainer>
  )
}

export default Meals