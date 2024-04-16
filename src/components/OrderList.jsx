import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import Button from './Button';
import AmountCounter from './AmountCounter';
import { ShoppingCartContext } from '../App';
import { FaTrashAlt } from 'react-icons/fa';

const ListContainer = styled.ul`
    padding: 0;
    max-height: 90%;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    overflow: scroll;
`;

const ListItem = styled.li`
    width: 76rem;

    background-color: ${colors.base};
    padding: 3.3rem;
    border-radius: 1.5rem;
`;

const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    border-bottom: solid ${colors.primary} 2px;
`;

const OrderInfoBox = styled.div`
    color: ${colors.tertiare};
    font-size: 3rem;
    font-weight: ${fontsWeights.bold};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
        margin: 0;
        line-height: 2.2;
    }
`;

const OptionsList = styled.ul`
    color: ${colors.tertiare};
    font-size: 2.2rem;
    font-weight: ${fontsWeights.regular};

    margin-left: 5rem;
    list-style: inside;
`;

const OptionItem = styled.li`
`;

const OrderInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const OrderOptions = styled.div`
    margin-top: 3rem;

    display: flex;
    flex-direction: row;
    gap: 2rem;
`;

const OrderList = ({option}) => {
    const [cart, setCart] = useContext(ShoppingCartContext); 
    const options = option;

    const deleteMeal = (e) => {
        delete cart[e.target.value];
        const newCart = {...cart};
        setCart(newCart);
    }

  return (
    <ListContainer>
        {
            Object.values(cart).map(meal => {
            
            return (
            <ListItem key={meal.orderId}>
                <OrderInfoContainer>
                    <OrderInfoBox>
                        <OrderInfo>
                            <p>{meal.amount}x</p>
                            <p>{meal.name}</p>
                        </OrderInfo>
                        <p>€ {(meal.price * meal.amount).toFixed(2)}</p>
                    </OrderInfoBox>
                    <OptionsList>
                        {
                            meal && meal.options.side && meal.options.side.map((option, index) => {
                                if (option) {
                                    return <OptionItem key={`${index}-${option}`}>{option}</OptionItem>
                                }
                            })
                        }
                        {
                            meal && meal.options.drink && meal.options.drink.map((option, index) => {
                                if (option) {
                                    return <OptionItem key={`${index}-${option}`}>{option}</OptionItem>
                                }
                            })
                        }
                        {
                            meal && meal.options.sauce && meal.options.sauce.map((option, index) => {
                                if (option) {
                                    return <OptionItem key={`${index}-${option}`}>{option}</OptionItem>
                                }
                            })
                        }
                    </OptionsList>
                </OrderInfoContainer>
                { options &&
                    <OrderOptions>
                        <AmountCounter meal={meal}/>
                        <Button btnColor={colors.primary} handleFunction={deleteMeal} value={meal.orderId}><FaTrashAlt style={{marginTop: '0.5rem'}}/></Button>
                    </OrderOptions>
                }
            </ListItem>)
            }
            )

        }
    </ListContainer>
  )
}

export default OrderList