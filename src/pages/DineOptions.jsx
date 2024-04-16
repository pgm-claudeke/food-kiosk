import React from "react";
import { Header, OrderOptions, Footer } from "../components";
import ROUTES from "../constants/routes";
import { GiKnifeFork } from "react-icons/gi";
import { RiShoppingBag2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { pageSwitch } from "../constants/animations";

const LINKS = [
    {
        label: 'Dine in',
        icon: <GiKnifeFork />,
        route: ROUTES.MENU,
        key: "option_dine_in"
    },
    {
        label: 'Take out',
        icon: <RiShoppingBag2Line />,
        route: ROUTES.MENU,
        key: "option_take_out"
    },
]


const DineOptions = () => {
  return (
    <motion.div variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
        <Header/>
        <OrderOptions links={LINKS}/>
        <Footer/>
    </motion.div>
  );
};

export default DineOptions;
