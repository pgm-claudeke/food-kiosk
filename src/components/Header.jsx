import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import logoInverted from '../assets/images/logos/Logo_inverted.png';
import commercialOne from '../assets/images/commercercials/commercial_01.jpeg';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import ROUTES from '../constants/routes';

const HeaderContainer = styled.header`
    background-color: ${colors.primary};
    height: 12vh;
    border-bottom: ${colors.secondary} solid 1.25rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LogoContainer = styled(motion.button)`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 5rem;
    font-weight: 900;

    width: 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden; 
`;

const CommercialContainer = styled(motion.div)`
    background-color: #fff;
    height: 100%;
    width: 60%;

    border-radius: 10rem 0rem 0rem 10rem;
    box-shadow: -6px 0px 16px 0px rgba(0,0,0,0.16);

    overflow: hidden;
`;

const LogoImage = styled.img`
    object-fit: cover;
`;

const CommercialImg = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: center;
`;

const commerceMotion = {
    hidden: {
        x: '100rem'
    }, 
    show: {
        x: 0,
        transition: {
            type: 'spring', 
            stiffness: 20,
            duration: 1,
            delay: 0.5
        }
    }
}

const Header = () => {
    const navigate = useNavigate();

    const handleToHome = () => {
        navigate(ROUTES.HOME);
        localStorage.removeItem("cart");
    }
  return (
    <HeaderContainer>
        <LogoContainer onClick={handleToHome}>
            <LogoImage src={logoInverted}/>
        </LogoContainer>
        
        <CommercialContainer variants={commerceMotion} initial="hidden" animate="show">
            <CommercialImg src={commercialOne}/>
        </CommercialContainer>
    </HeaderContainer>
  )
}

export default Header