import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { Route, useLocation, Routes } from "react-router-dom";
import ROUTES from "./constants/routes";
import { DineOptions, Home, Menu, PayOptions, Order, ValidateOrder, CardPayment, CodePayment, Presence, Success } from './pages';
import { AnimatePresence } from 'framer-motion';

export const ShoppingCartContext = createContext();
export const MealSauceContext = createContext();


const App = () => {
  const lS = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState({...lS});
  const [options, setOptions] = useState({});

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  const location = useLocation();

  return (
    <ShoppingCartContext.Provider value={[cart, setCart]}>
    <MealSauceContext.Provider value={[options, setOptions]}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
            <Route path={ROUTES.HOME} element={<Home/>}></Route>
            <Route path={ROUTES.DINE} element={<DineOptions/>}></Route>
            <Route path={ROUTES.MENU} element={<Menu/>}></Route>
            <Route path={ROUTES.ORDER} element={<Order/>}></Route>
            <Route path={ROUTES.VALIDATE} element={<ValidateOrder/>}></Route>
            <Route path={ROUTES.PAY} element={<PayOptions/>}></Route>
            <Route path={ROUTES.CARDPAY} element={<CardPayment/>}></Route>
            <Route path={ROUTES.CODEPAY} element={<CodePayment/>}></Route>
            <Route path={ROUTES.PRESENCE} element={<Presence/>}></Route>
            <Route path={ROUTES.SUCCESS} element={<Success/>}></Route>
        </Routes>
      </AnimatePresence>
    </MealSauceContext.Provider>
    </ShoppingCartContext.Provider>
  )
}

export default App

// 1. creeër een context SHoppingCartContext;
// 2. doorgeven aan kinderen dat er een context is ShoppingCartContext.Provider 
// 3. geef waardes mee en spreek ze aan waar je nodig hebt dus kan in layout, pages of components
//