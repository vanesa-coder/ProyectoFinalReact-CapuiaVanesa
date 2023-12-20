import React from 'react';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../../contex/CartContex";
import styles from "./CardWidget.module.css";
import { Link } from "react-router-dom";



export const CardWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <>
    <Link to={"./Cart"}>
    <div className={styles.divCarrito}>
      < PiShoppingCartSimpleBold className= {styles.carrito} />

      <button className={styles.boton} type="button"> 
          <span>{ totalQuantity }</span>
      </button>
    </div>
    </Link>
    
    
    </>
  )
}