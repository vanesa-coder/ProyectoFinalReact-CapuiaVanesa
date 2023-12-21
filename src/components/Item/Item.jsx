import { Link } from "react-router-dom";
import styles from "../Item/Item.module.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../contex/CartContex";
import Swal from 'sweetalert2';



export const Item = ({id, name, img, description, precio, stock}) => {
    //agregar al carrito
    // const { addItem } = useCart();
    // const onAdd = (items) => {
    //   addItem({
    //     id,
    //     name,
    //     precio,
    //   }, items);

    //   Swal.fire({
    //     icon: 'success',
    //     title: 'Producto agregado al carrito',
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // };
    
  return (
    <div className={styles.itemCard}>
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <img src={img} alt="" />
        <p className="card-text"> {description} </p>
        <Link to={`/item/${id}`}>
          <button className={styles.buttonDetail} >Detalles</button>
        </Link>
        {/* <p><b>Precio:</b> $ {precio} </p> */}
        {/* <ItemCount stock={stock} onAdd={onAdd} /> */}
      </div>
    </div>
  )
}    