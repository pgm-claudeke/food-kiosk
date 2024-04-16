import React from 'react';
import { CgClose } from 'react-icons/cg';
import { colors, radius } from '../constants/styles';
import styled from 'styled-components';


const CloseBtn = styled.button`
    background-color: ${colors.secondary};
    border-radius: ${radius.main}; 
    border: solid ${colors.base} 0.25rem; 
    position: absolute;
    top: -1.8rem;
    right: -1.8rem;
    padding: 0.4rem;

    font-size: 3.5rem;
    color: ${colors.base};

    display: flex;
    justify-content: center; 
    align-items: center;
`;

const ButtonClose = ({handleClose}) => {
  return (
    <CloseBtn>
        <CgClose onClick={handleClose}/>
    </CloseBtn>
  )
}

export default ButtonClose