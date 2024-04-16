import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import scanAnimation from '../assets/lotties/76940-credit-card.json';
import Payment from '../components/Payment';
import { motion } from 'framer-motion';
import { pageSwitch } from '../constants/animations';


const CardPayment = () => {
    const navigate = useNavigate();

   useEffect(() => {
       setTimeout(() => {
           navigate('/success')
       }, 6000);
   }, [navigate]);

  return (
      <motion.div variants={pageSwitch} initial='hidden' animate='show'>
          <Payment lottieAni={scanAnimation}>Follow the instruction on the terminal</Payment>
      </motion.div>
  )
}

export default CardPayment 