import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights, radius } from '../constants/styles';
import Lottie from 'react-lottie';
import logoInverted from '../assets/images/logos/Logo_inverted.png';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    color: ${colors.base};
`;

const Instructions = styled.p`
    font-size: 4rem;
    width: 80%;
    text-align: center;
    font-weight: ${fontsWeights.bold};
`;

const AnimationBox = styled.div`
    background-color: ${colors.secondary};
    border-radius: ${radius.main};
`;

const LogoImage = styled.img`
    width: 34rem;
`;

const Payment = ({lottieAni, children}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieAni,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
  return (
    <Container>
        <LogoImage src={logoInverted}/>
        <Instructions>{children}</Instructions>
        <AnimationBox>
            <Lottie options={defaultOptions} height={1000} width={1000}/>
        </AnimationBox>
    </Container>
  )
}

export default Payment