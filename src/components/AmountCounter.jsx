import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { colors, fontsWeights, radius } from '../constants/styles';
import { MealSauceContext, ShoppingCartContext } from '../App';
import Button from './Button';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
    display: flex;
    flex-direction: row;

    gap: 3rem;
`;

const Counter = styled.div`
    display: flex;
    flex-direction: row;
`

const BtnAdd = styled.button`
    font-size: 2.5rem;
    color: ${colors.base};

    background-color: ${colors.primary};
    border: none;
    height: 5.6rem;
    width: 5.6rem;
    border-radius: 0rem ${radius.main} ${radius.main} 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const BtnSubtract = styled.button`
    font-size: 2.5rem;
    color: ${colors.base};

    background-color: ${colors.primary};
    border: none;
    height: 5.6rem;
    width: 5.6rem;
    border-radius: ${radius.main} 0rem  0rem ${radius.main};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Amount = styled.input`
    height: 5.6rem;
    width: 5.6rem;
    outline: ${colors.primary} solid 1px;
    outline-offset: -1px;
    background-color: ${colors.base};
    border: none;

    font-size: 3rem;
    font-weight: ${fontsWeights.bold};
    color: ${colors.tertiare};

    text-align: center;
`;

const AmountCounter = ({color, defaultAmount = 1, meal, saveOnChange = true, handleModals, drink, side}) => {
    const [cart, setCart] = useContext(ShoppingCartContext);
    const [sauces, setSauces] = useContext(MealSauceContext)
    const [count, setCount] = useState(meal && meal.amount ? meal.amount : defaultAmount);
    
    const mealData = meal;

    const changeCount = (newCount) => {
        setCount(newCount);
        if (saveOnChange) {            
            setCart({
            ...cart,
            [mealData.orderId]: {
                ...mealData,
                amount: newCount, 
            }
            })
        } 
    }

    const  handleAdd = () => {
        changeCount(count + 1)
    };

    const  handleSubtract = (e) => {
        changeCount(count - 1)

        if (count <= 1) {
            changeCount(0);
        }
    };

    const handleChange = (e) => {
        changeCount(parseInt(e.target.value));
    }

    const handleSave = () => {
        const id = uuid()
    
        handleModals()

        setCart({
            ...cart,
            [id]: {
                orderId: id,
                id: mealData.id,
                name: mealData.name,
                price: mealData.price,
                amount: count,
                options: {
                    drink: [drink],
                    side: [side],
                    sauce: sauces ? Object.values(sauces) : []
                }
            }
        });
        setSauces(null);
    }

  return (
      
    <Container>
        <Counter>
            <BtnSubtract style={{backgroundColor: color}} onClick={handleSubtract}><FaMinus/></BtnSubtract>
            <Amount type="number" value={count} style={{outline: color}} onChange={handleChange}/>
            <BtnAdd style={{backgroundColor: color}} onClick={handleAdd}><FaPlus/></BtnAdd>
        </Counter>
        {
            !saveOnChange && <Button btnWidth='18rem' btnColor={colors.secondary} handleFunction={handleSave}>Add</Button>
        }
    </Container>
  )
}

export default AmountCounter