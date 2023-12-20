// import './App.css'
import React from 'react';
import { NavBar, ItemDetailContainer, ItemListContainer, Cart, } from "./components"
import { BrowserRouter,Routes, Route, } from "react-router-dom"
import { CartContexProvider } from "./contex/CartContex"
import { FirebaseContextProvider } from './contex/FirebaseContex';

function App() {
  
  return (
    <>
     <BrowserRouter>
        <FirebaseContextProvider>
        <CartContexProvider>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContexProvider>
        </FirebaseContextProvider>
     </BrowserRouter>
        
    </>
  )
}

export default App
