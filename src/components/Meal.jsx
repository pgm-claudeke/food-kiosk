import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';

const MealContainer = styled.li``;

const MealBtn = styled.button`
    background-color: ${props => props.isActive ? colors.secondary : 'transparent'};
    border: none;
    border-radius: ${radius.main};
    padding: 1rem;

    color: ${colors.base};
    font-size: 2rem;
    font-weight: ${fontsWeights.bold};
    text-align: center;

    width: 18rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    > * {
        pointer-events: none;
    }
`;

const MealImageBox = styled.div`
    background-color: ${colors.base};
    width 16rem;
    height: 16rem;
    border-radius: ${radius.main};

    display: flex;
    justify-content: center; 
    align-items: center;

    overflow: hidden;
`;

const MealImage = styled.img`
    height: 70%;
    object-fit: cover;
    object-position: center;
`;

const Meal = ({image, name, handleFunction, id, scale, handleActive, value}) => {
  return (
    <MealContainer>
        <MealBtn onClick={(e) => handleFunction(e, id)} id={id} isActive={handleActive} value={value}>
            <MealImageBox style={{height: scale, width: scale}}>
                <MealImage src={image}/>
            </MealImageBox>
            {name}
        </MealBtn>
    </MealContainer>  
  )
}

export default Meal