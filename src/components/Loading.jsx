import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import Lottie from 'react-lottie';
import loadingAnimation from '../assets/lotties/97934-loading-animation.json';

const LoadingContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}
  return (
    <LoadingContainer>
        <Lottie options={defaultOptions} height={600} width={600}/>
    </LoadingContainer>
  )
}

export default Loading