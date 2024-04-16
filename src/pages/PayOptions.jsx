import React from 'react';
import ROUTES from '../constants/routes';
import { Header, OrderOptions, Footer } from '../components';
import { FaCreditCard, FaQrcode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { pageSwitch } from '../constants/animations';

const LINKS = [
    {
        label: 'Payconiq',
        icon: <FaQrcode/>,
        route: ROUTES.CODEPAY,
        key: 'option_pay_code'
    },
    {
        label: 'Bancontact',
        icon: <FaCreditCard />,
        route: ROUTES.CARDPAY,
        key: 'option_pay_card'
    },
]

const PayOptions = () => {
  return (
    <motion.div variants={pageSwitch} initial='hidden' animate='show' exit='exit'>
    <Header/>
    <OrderOptions links={LINKS}/>
    <Footer/>
    </motion.div>
  )
}

export default PayOptions