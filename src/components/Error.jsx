import React from 'react';
import styled from 'styled-components';
import { colors, fontsWeights } from '../constants/styles';
import { TbFaceIdError } from "react-icons/tb";

const ErrorContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`;

const ErrorMessage = styled.p`
    text-align: center;
    color: ${colors.base};
    font-size: 5rem;
    font-weight: ${fontsWeights.bold};
`;

const Error = () => {
  return (
    <ErrorContainer>
        <TbFaceIdError style={{color: colors.base, fontSize: '50rem'}}/>
        <ErrorMessage>Something went wrong.</ErrorMessage>
    </ErrorContainer>
  )
}

export default Error