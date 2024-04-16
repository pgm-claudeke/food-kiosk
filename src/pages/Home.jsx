import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import ROUTES from '../constants/routes';
import posterOne from '../assets/images/posters/Poster_01.png';
import logo from '../assets/images/logos/Logo.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageSwitch } from '../constants/animations';



const HomeContainer = styled(Link)`
    text-decoration: none;
    height: 100vh;
`;

const Logo = styled.img`
    width: 32rem;
    position: fixed;
    top: 5rem;
    left: 6rem;
`;

const ImgBox = styled.div`
    height: 86vh;
`;

const TextBox = styled.div`
    height: 14vh;
    width: 100%;
    background-color: ${colors.primary};

    color: ${colors.base};
    font-weight: ${fontsWeights.bold};
    font-size: 5rem;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const PosterImage = styled.img`
    width: 100%;
`;

const Home = () => {
  return (
    <motion.div variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
    <HomeContainer to={ROUTES.DINE}>
        <ImgBox>
            <Logo src={logo}/>
            <PosterImage src={posterOne}/>
        </ImgBox>
        <TextBox>Tab the screen to order</TextBox>
    </HomeContainer>
    </motion.div>
  )
}

export default Home;