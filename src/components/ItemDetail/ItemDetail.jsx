import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { useCart } from "../../contex/CartContex";
import Swal from 'sweetalert2';
import { Item } from "../Item/Item";


export const ItemDetail = ({id, category, name, img, description, stock, precio}) => {
    const {addItem }   = useCart();
    
    //Agrega un producto al carrito
    const onAdd = (items) => {
      addItem({
        id,
        category,
        name,
        img,
        description,
        precio,
      }, items);
      console.log(items);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    };
  
  
    return (
        <div className="p-5 border border-3 rounded-4">
            <div className="d-flex justify-content-center">
              <img src={img} alt="" />
            </div>
            <div className="d-flex  flex-column">
              <p>Nombre: {name} </p>
              <p>Descripción: {description} </p>
              <p><b>Precio:</b> $ {precio} </p>
              <ItemCount stock={stock} onAdd={onAdd}/>
            </div>
            <Link to="/">
            <button className="btn btn-dark">Volver</button>
            </Link>
        </div>
  )
}