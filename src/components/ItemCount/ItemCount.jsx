import { useState } from "react";
import styles from "../ItemCount/ItemCount.module.css";


export const ItemCount = ( {stock, initial= 1, onAdd } ) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
        return setCount(count + 1);
        }
        setCount(count);
    };

    const decrement = () => {
        if (count === 0) {
        return setCount(0);
        }
        setCount(count - 1);
    };

  return (
    <div className="d-flex justify-content-center    p-3 ">
      <div className="d-flex">
        <button className={styles.buttonC} onClick={decrement}>
          -
        </button>
        <strong className=" mt-2">{count}</strong>
        <button className={styles.buttonC} onClick={increment}>
          +
        </button>
      </div>
      <button className={styles.buttonCount} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>  
        
      
  )
}