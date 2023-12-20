import { Link } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";
import styles from "../Navbar/Navbar.module.css";



export const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
  <div className="container-fluid">
  <img className={styles.logo} src="/img/logo-bijou-ivane-black.png"/>
    <a href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul  className={styles.itemCategorias}>
       
        <li className={styles.categoria}>
          <Link to={"/"} className={styles.links}>HOME</Link>
        </li>  
       
        <li className={styles.categoria}>
          <Link to={"/category/anillos"} className={styles.links}>ANILLOS</Link>  
        </li>
       
        <li className={styles.categoria}>
          <Link to={"/category/aros"} className={styles.links}>AROS</Link>   
        </li>  
        
        <li className={styles.categoria}>
          <Link to={"/category/cadenas"} className={styles.links}>CADENAS</Link>
        </li>
        
        <li className={styles.categoria}>
          <Link to={"/category/pulseras"}className={styles.links}>PULSERAS</Link>
        </li>   
        
       </ul>
    </div>
  </div>
  <CardWidget />
</nav>
    </>
  )
}