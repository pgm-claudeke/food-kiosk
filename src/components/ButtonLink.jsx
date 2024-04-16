import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { colors, radius } from '../constants/styles';

const Btn = styled(Link)`
    text-decoration: none;
    border-radius: ${radius.main};
    height: 5.6rem;

    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.base};

    display: flex;
    justify-content: center; 
    align-items: center;

    padding: 0rem 2rem;
`;

const ButtonLink = ({children, btnColor, btnWidth, link, fontSize, btnHeight}) => {
  return (
    <Btn to={link} style={{backgroundColor:btnColor, width:btnWidth, height:btnHeight, fontSize:fontSize}}>
        {children}
    </Btn>
  )
}

export default ButtonLink