import React from 'react';
import MealOptionList from './MealOptionList';

const MealSides = ({handleChoice, handleActive}) => {
  return (
    <div>
        <MealOptionList title="Choose your side" filter="sides" handleChoice={handleChoice} handleActive={handleActive} optionType="side"/>
    </div>
  )
}

export default MealSides