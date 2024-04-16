import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import succesAnimation from '../assets/lotties/lf30_editor_qicv165r.json';
import styled from 'styled-components';
import { colors } from '../constants/styles';
import { OrderQuestion } from '../components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageSwitch } from '../constants/animations';

const Container = styled(motion.div)`
    background-color: ${colors.primary};
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
`;

const Success = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: succesAnimation,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        const idleTimer = setTimeout(() => {
            navigate('/');
            localStorage.removeItem("cart");
            window.location.reload();
        }, 6000);

        return () => {
            clearTimeout(idleTimer);
        }
    }, [navigate])

  return (
    <Container variants={pageSwitch} exit='exit'>
        <OrderQuestion>Payment succefull.</OrderQuestion>
        <Lottie options={defaultOptions} height={800} width={800}/>
    </Container>
  )
}

export default Success