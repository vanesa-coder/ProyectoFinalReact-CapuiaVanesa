import { createContext, useContext, useEffect, useState } from "react";


// creo el contexto del carrito
export const CartContex = createContext(null);

// Hook para utilizar el contexto del carrito
export const useCart = () => {
    const context = useContext(CartContex);
    if (!context) {
      throw new Error('useCart must be used within a CartContextProvider');
    }
    return context;
  };

// creo el provider
export const CartContexProvider = ( {children} ) => {

  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []

    // Almacenar los elementos del carrito
  const [cartItems, setCartItems] = useState([storedCartItems]);
  // Total de todos los elementos del carrito
  const [totalCartItems, setTotalCartItems] = useState(0);
  // Cantidad total de productos en el carrito
  const [totalQuantity, setTotalQuantity] = useState(0);


   // Función para añadir un elemento al carrito o actualizar la cantidad si ya existe
    const addItem = (item, quantity) => {
    const { id, category, img, name, description, precio, stock, } = item;
    const index = cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
        const cartItemsCopy = [...cartItems];
        cartItemsCopy[index].quantity += quantity;
        cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].precio;
        setCartItems(cartItemsCopy);
      } else {
        const newItem = {
          id,
          category,
          img,
          name,
          description,
          precio,
          stock,
          quantity,
          subTotal: quantity * precio,
        };
  
        setCartItems([...cartItems, newItem]);
      }
    };
   
   // Función para eliminar un elemento del carrito
  const removeItem = (id) => {
    const arrayFilter = cartItems.filter((item) => item.id !== id);
    setCartItems(arrayFilter);
  };

   // Función para limpiar todos los elementos del carrito
   const clearCartItems = () => {
    setCartItems([]);
  };

  // Función para actualizar la cantidad de un elemento en el carrito
  const updateItemQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity, subTotal: newQuantity * item.precio } : item
    );

    setCartItems(updatedCartItems);
};

// Función para calcular el total de la compra
const handleTotal = () => {
    const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalCartItems(total);
  };

  // Función para calcular la cantidad total de productos en el carrito
  const handleTotalQuantity = () => {
    const total = cartItems.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
  };

  // Efecto para recalcular el total y la cantidad total cuando cambian los elementos del carrito
  useEffect(() => {
    handleTotal();
    handleTotalQuantity();
  }, [cartItems]);
   

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])

   
   
    // Valor del contexto que contiene los estados y funciones necesarios para el carrito
  const contextValue = {
    cartItems,
    totalCartItems,
    totalQuantity,
    addItem,
    removeItem,
    clearCartItems,
    updateItemQuantity,
    setTotalQuantity,
  };

    return <CartContex.Provider value={ {contextValue} }> {children} </CartContex.Provider>
}