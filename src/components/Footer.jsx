import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants/styles';

const FooterContainer = styled.footer`
    background-color: ${colors.primary};
    height: 7vh;
    width: 100%;

    position: sticky;
    bottom: 0;
    left: 0
`;

const Footer = () => {
  return (
    <FooterContainer/>
  )
}

export default Footer