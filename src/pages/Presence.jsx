import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { OrderQuestion } from '../components';
import ButtonLink from '../components/ButtonLink';
import ROUTES from '../constants/routes';
import { colors, radius } from '../constants/styles';

const  Container = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed; 
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors.primary};
`;

const Modal = styled.div`
    width: 93%;
    height: 96%;
    padding: 3rem 3rem;
    border-radius: ${radius.main};
    border: solid ${colors.secondary} 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

const btnWidth = '30rem'

const Presence = () => {
    const navigate = useNavigate();

    //useEffect(() => {
    //    setTimeout(() => {
    //        navigate(ROUTES.HOME);
    //        localStorage.removeItem("cart");
    //    }, 60000)
    //}, [navigate]);

  return (
    <Container>
        <Modal>
            <OrderQuestion>Do you want to proceed with your order?</OrderQuestion>
            <ButtonContainer>
                <ButtonLink link={ROUTES.HOME} btnColor={colors.secondary} btnWidth={btnWidth}>Cancel</ButtonLink>
                <ButtonLink link={ROUTES.MENU} btnColor={colors.secondary} btnWidth={btnWidth}>Proceed</ButtonLink>
            </ButtonContainer>
        </Modal>
    </Container>
  )
}

export default Presence