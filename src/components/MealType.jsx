import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import Meal from './Meal';
import ButtonClose from './ButtonClose';
import { motion } from 'framer-motion';
import { containerMotion } from '../constants/animations';

const MealTypeContainer = styled(motion.div)`
    backdrop-filter: blur(12px)  grayscale(15%);
    height: 70.5vh;
    width: 100%;

    position: fixed;
    top: 19rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealTypeBox = styled(motion.div)`
    min-height: 20rem;
    min-width: 20rem;
    border-radius: ${radius.main};
    background-color: ${colors.primary};
    color: ${colors.base};
    position: absolute;
    padding: 4rem;
`;

const MealName = styled.p`
    font-size: 4rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 4rem;
    background-color: ${colors.secondary};
    border-radius: ${radius.main};
    padding: 1rem 1.5rem;
    width: fit-content;
`;

const TypesList = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
`;

const boxMotion = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.35,
            duration: 0.6
        }
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.1,
            when: "beforeChildren"
        }
    }
}

const MealType = ({handleClose, data, mealName, handleFunction}) => {
  return (
    <MealTypeContainer variants={containerMotion} initial="hidden" animate="show" exit="exit">
        <MealTypeBox variants={boxMotion} initial="hidden" animate="show" exit="exit">
            <ButtonClose handleClose={handleClose}/>
            <MealName>{mealName}</MealName>
            <TypesList>
                {
                    data.map(data => {
                        const image = require(`../assets/images/meals/${data.image}`);
                    
                        return(
                            <Meal key={data.name}  image={image} name={data.label} handleFunction={handleFunction} id={data.id}/>
                        )
                    })
                }
            </TypesList>
        </MealTypeBox>
        
    </MealTypeContainer>
  )
}

export default MealType