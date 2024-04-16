import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShoppingCartContext } from '../App';
import ROUTES from '../constants/routes';
import { colors, fontsWeights } from '../constants/styles';
import ButtonLink from './ButtonLink';

const Container = styled.div`
    color: ${colors.base};
    font-size: 4.6rem;
    font-weight: ${fontsWeights.regular};

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;

    width: 74rem;
    height: 10vh;

    p {
        margin: 0;
    }
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const btnWidth = '49%';

const OrderTotal = ({nav, navName}) => {
    const [cart] = useContext(ShoppingCartContext)
    const currentTotal = Object.values(cart).reduce((sum, {amount, price}) => sum  + (amount * price), 0).toFixed(2) 
  return (
    <Container>
        <p>Total: € {currentTotal}</p>
        <BtnContainer>
            <ButtonLink link={ROUTES.MENU} btnColor={colors.secondary} btnWidth={btnWidth}>Go Back</ButtonLink>
            <ButtonLink link={nav} btnColor={colors.secondary} btnWidth={btnWidth}>{navName}</ButtonLink>
        </BtnContainer>
    </Container>
  )
}

export default OrderTotal