import React from 'react';
import MealOptionList from './MealOptionList';

const MealSauces = ({handleChoice, handleActive, number}) => {
  return (
    <div>
        <MealOptionList title={`Choose Sauce ${number}`} filter="dipping sauces" handleChoice={handleChoice} handleActive={handleActive} idPrefix={number} optionType="sauce"/>
    </div>
  )
}

export default MealSauces 