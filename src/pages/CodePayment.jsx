import React, { useEffect } from "react";
import scanAnimation from "../assets/lotties/lf30_editor_1osfp31i.json";
import Payment from "../components/Payment";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { pageSwitch } from "../constants/animations";

const CodePayment = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/success')
        }, 6000)
    }, [navigate])
  return (
      <motion.div variants={pageSwitch} initial='hidden' animate='show'>
          <Payment lottieAni={scanAnimation}>Scan the code on the terminal</Payment>
      </motion.div>
  );
};

export default CodePayment; 
