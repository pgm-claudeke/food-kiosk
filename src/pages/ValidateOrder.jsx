import React, { useContext } from 'react';
import styled from 'styled-components';
import { OrderQuestion, OrderList, OrderTotal } from '../components';
import { colors } from '../constants/styles';
import ROUTES from '../constants/routes';
import { motion } from 'framer-motion';
import { pageSwitch } from '../constants/animations';
import { ShoppingCartContext } from '../App';
import ButtonLink from '../components/ButtonLink';


const OrderContainer = styled(motion.div)`
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary};
    padding: 4rem 3rem 3rem 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

const OrderBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 86vh;
`;


const ValidateOrder = () => {
    const [cart] = useContext(ShoppingCartContext);

    const cartAmount = Object.values(cart).length;

  return (
    <OrderContainer variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
        <OrderBox>
            <OrderQuestion>
            { 
                    cartAmount === 0 ? 'You have no orders yet.' : 'Is your order correct?'
            }
            </OrderQuestion>
            <OrderList option={false}/>
            { 
                cartAmount === 0 && <ButtonLink btnColor={colors.secondary} btnWidth='30rem' btnHeight='10rem' link={ROUTES.MENU} fontSize='5rem'>Go Back</ButtonLink>
            }
        </OrderBox>
        {
             cartAmount === 0 ? '' :  <OrderTotal nav={ROUTES.PAY} navName="Pay"/>
        }
        
    </OrderContainer>
  )
}

export default ValidateOrder