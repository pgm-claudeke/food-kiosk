import React from 'react'
import MealOptionList from './MealOptionList'

const MealDrinks = ({handleChoice, handleActive}) => {
  return (
    <div>
        <MealOptionList title="Choose your drink" filter="drinks" handleChoice={handleChoice} handleActive={handleActive} optionType="drink"/>
    </div> 
  )
}

export default MealDrinks