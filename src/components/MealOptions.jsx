import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import AmountCounter from './AmountCounter';
import MealDrinks from './MealDrinks';
import MealSauces from './MealSauces';
import MealSides from './MealSides';
import ButtonClose from './ButtonClose';
import { motion } from 'framer-motion';
import { containerMotion } from '../constants/animations';

const MealOptionContainer = styled(motion.div)`
    backdrop-filter: blur(12px)  grayscale(15%);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0rem;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MealOptionBox = styled(motion.div)`
    background-color: ${colors.primary};
    border-radius: ${radius.main};
    max-height: 94%;
    width: 92%;
    position: relative;

    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const MealInfoContainer = styled.div`
    background-color: ${colors.base};
    border-radius: ${radius.main};

    color: ${colors.secondary};
    padding: 4rem 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8rem;
`;

const MealImageBox = styled.div`
    height: 14rem;
    width: 14rem;
`;

const MealImage = styled.img`
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const MealInfoBox = styled.div`
`;

const MealName = styled.p`
    font-size: 4rem;
    font-weight: ${fontsWeights.bold};
    margin-bottom: 1rem;
`;

const MealPrice = styled.p`
    font-size: 2.5rem;
    font-weight: ${fontsWeights.regular};
`;

const ButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    align-items: center;
    justify-content: center;
`;

const OptionContainer = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ::-webkit-scrollbar {
        width: 20px
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${colors.secondary};
        border-radius: ${radius.main}
    }
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
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.05,
            when: "beforeChildren"
        }
    }
}

const MealOptions = ({data, handleClose, handleModals}) => { 
    const [selectedDrink, setSelectedDrink] = useState(null);
    const [selectedSide, setSelectedSide] = useState(null);
    const [selectedSauce, setSelectedSauce] = useState(null);

    const mealData = data;
    const options = mealData.options; 

    const image = require(`../assets/images/meals/${mealData.image}`);

    const handleSideChoice =  (e) => {
        setSelectedSide(e.target.value);
    }

    const handleSauceChoice = (e) => {
        setSelectedSauce(e.target.value);
    }

    const handleDrinkChoice = (e) => {
        setSelectedDrink(e.target.value);
    }

  return (
    <MealOptionContainer variants={containerMotion} initial="hidden" animate="show" exit="exit">
        <MealOptionBox variants={boxMotion} initial="hidden" animate="show" exit="exit"> 
            <ButtonClose handleClose={handleClose}/>
            <MealInfoContainer>
                <MealImageBox>
                    <MealImage src={image}/>
                </MealImageBox>
                <MealInfoBox>
                    <MealName>{mealData.name}</MealName>
                    <MealPrice>€ {mealData.price.toFixed(2)}</MealPrice>
                </MealInfoBox>
            </MealInfoContainer>
            {
                options && 
                <OptionContainer>
                {
                    options.side &&
                    <MealSides handleChoice={handleSideChoice} />
                }
                {
                    options.sauce ?
                    [...Array(options.sauce)].map((sauce, index) => {
                        return(
                            <MealSauces key={index} number={index + 1} handleChoice={handleSauceChoice}/>
                        )
                    })
                    :
                    <></>
                }
                {
                    options.drink &&
                    <MealDrinks handleChoice={handleDrinkChoice}/>
                }
                </OptionContainer>
            }
            <ButtonContainer>
                <AmountCounter saveOnChange={false} color={colors.secondary} meal={mealData} handleModals={handleModals} drink={selectedDrink} side={selectedSide}/>
            </ButtonContainer>
        </MealOptionBox>
    </MealOptionContainer>
  )
}

export default MealOptions