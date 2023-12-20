import { useContext } from "react";
import { CartContex } from "../../contex/CartContex";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import styles from "./Cart.module.css";

export const Cart = () => {

  const navigate = useNavigate();
  const { cartItems, totalCartItems, removeItem, updateItemQuantity } = useContext(CartContex);
  
 
  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Carrito vacio",
        text: "verifique que el carrito contenga los productos",
        icon: "error"
      });

    } else {
      navigate("/confirmar-compra");
    }
  };


  return (
    <div className={styles.boxCarrito}>
      <h2>Carrito</h2>
      <div>
        {cartItems.map((item) => (
          <div className={styles.boxDate} key={item.id}>
            <p>Nombre: {item.name}</p>
            <p>Precio Unitario: ${item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total: ${item.subTotal}</p>
            <div>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Reducir</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Incrementar</button>
            </div>
            <button onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <h3>Suma total del carrito ${totalCartItems}</h3>

      <button className="btn btn-primary mx-auto m-2" style={{ width: "20%" }} onClick={handleConfirmOrder}>Confirmar Compra</button>

      <button className="btn btn-danger mx-auto m-2" style={{ width: "20%" }} onClick={handleEmptyCart}>Vaciar Carrito</button>
                
    </div>
  );
}
