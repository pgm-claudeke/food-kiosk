import React from 'react'
import styled from 'styled-components'
import { colors, radius } from '../constants/styles';

const Btn = styled.button`
    border: none;
    border-radius: ${radius.main};
    height: 5.6rem;

    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.base};

    padding: 0 2rem;

    > * {
        pointer-events: none;
    }
`;

const Button = ({children, btnColor, btnWidth, handleFunction, value}) => {
  return (
    <Btn style={{backgroundColor:btnColor, width:btnWidth}} onClick={handleFunction} value={value}>
        {children}
    </Btn>
  )
}

export default Button