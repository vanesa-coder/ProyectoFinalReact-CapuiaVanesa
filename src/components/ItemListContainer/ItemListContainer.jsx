import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
// import { CartContex } from "../../contex/CartContex";xxxxxx
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { seedProducts } from "../Utils/seedProducts";




export const ItemListContainer = () => {
  // Obtén la cantidad total de productos en el carrito desde el contexto
  // const { totalQuantity } = useContext(CartContex); xxxxxxx

  // Obtén la categoría desde los parámetros de la URL
  const { category } = useParams();

  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setProduct] = useState(null);

  // Función para obtener productos desde la base de datos según la categoría
  const getProductsDB = async (category) => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    const resp = await getDocs(myProducts);
    if (resp.size === 0) {
    }

    // Mapea los documentos a un array de productos y actualiza el estado
    const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProducts(productList);
    setIsLoading(false);
  };

  const getProductById = async (id) => {
    const productRef = doc(db, "products", id);
    const resp = await getDoc(productRef);
    if (resp.exists()) {
      const prod = {
        id: resp.id,
        ...resp.data()
      };
      setProduct(prod);
    }
  };

  // Efecto para cargar los productos
  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
    getProductById(" ");
    // seedProducts()

  }, [category]);

  return (
    <> { isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products}/> } </>
  )
} 