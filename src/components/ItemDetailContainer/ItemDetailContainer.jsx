import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../config/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState(null);
    // const [isLoading, setIsLoading] = useState(false)

    // Efecto para cargar la información
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemRef = doc(db, 'products', id);
        const docSnap = await getDoc(itemRef);
        
        // Verifica si el documento existe 
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error en el Producto",
            text: "El producto que intenta buscar no existe",
          }).then((result) => {
            // Si el usuario hace clic en "OK", redirige a la página de inicio
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      } catch (error) {
        console.error('Error');
      }
    };

    // Llama a la función fetchData
    fetchData();
  }, [id, navigate]);
  
  return (
    <>
    <div >
    {item && <ItemDetail {...item} />}
    </div>
    </>
    );
};