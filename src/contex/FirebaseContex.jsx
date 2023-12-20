import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { createContext } from "react";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null)

export const FirebaseContextProvider = ({ children }) => {

    const addOrderDB = async (cartItems, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartItems,
            data: serverTimestamp(),
            total,
        }
        console.log(newOrder) // para que el tutor / profesor pueda corroborar los datos que se están cargando en FireBase
        const orderRef = await addDoc(collection(db, "orders"), newOrder)
        return orderRef.id
    }

    const contextValue = {
        addOrderDB
    }

    return <FirebaseContext.Provider value={contextValue}>{children}</FirebaseContext.Provider>
}