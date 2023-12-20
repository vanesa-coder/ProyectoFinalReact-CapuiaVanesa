import { Item } from "../Item/Item";
import styles from "../ItemList/ItemList.module.css";

export const ItemList = ({products}) => {
  return (
    <>
    <div className={styles.listProduct} >
      <img className={styles.bijouIvane} src="/img/logo-bijou-ivane.png" alt="" />
      <div className={styles.itemProduct}>
        {products.map( product => <Item key={product.id} {...product}  />)}
      </div>
    </div>
    
    </>
  )
}