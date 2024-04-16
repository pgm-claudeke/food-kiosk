import React from "react";
import styled from "styled-components";
import { colors, fontsWeights, radius } from "../constants/styles";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Options = styled.div`
  height: 81vh;
  padding: 0rem 6.25rem;
  background-color: ${colors.base};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Option = styled(Link)`
  height: 36rem;
  width: 33rem;
  background-color: ${colors.primary};
  border-radius: ${radius.main};

  text-decoration: none;
  color: ${colors.base};
  font-size: 3rem;
  font-weight: ${fontsWeights.bold};
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  p {
    margin: 0;
  }
`;

const IconContainer = styled.div`
  font-size: 18rem;
  height: 18rem;
`;

const scaleMotion = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            delay: 0.6
        }
    }
}

const OrderOptions = ({ links }) => {
  return (
    <Options>
      {links.map((link, index) => 
        <motion.div variants={scaleMotion} initial="hidden" animate="show" key={link.key}>
            <Option to={link.route}>
              <IconContainer>{link.icon}</IconContainer>
              <p>{link.label}</p>
            </Option>
        </motion.div>
      )}
    </Options>
  );
};

export default OrderOptions;
