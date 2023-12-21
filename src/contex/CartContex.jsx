import { createContext, useContext, useEffect, useState } from "react";


// creo el contexto del carrito
export const CartContex = createContext(null);


export const useCart = () => {
  const context = useContext(CartContex);
  if (!context) {
    throw new Error('useCart debe utilizarse dentro de un CartContextProvider');
  }
  return context;
};

// creo el provider
export const CartContexProvider = ( {children} ) => {

  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []

    
  const [cartItems, setCartItems] = useState([]);
  
  const [totalCartItems, setTotalCartItems] = useState(0);
  
  const [totalQuantity, setTotalQuantity] = useState(0);


   
    const addItem = (item, quantity) => {
    const { id, category, img, name, description, precio, stock, } = item;
    const index = cartItems.findIndex((product) => product.id === id);
    console.log(addItem)
    
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
   
   
  const removeItem = (id) => {
    const arrayFilter = cartItems.filter((item) => item.id !== id);
    setCartItems(arrayFilter);
  };

   
   const clearCartItems = () => {
    setCartItems([]);
  };

  
  const updateItemQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity, subTotal: newQuantity * item.precio } : item
    );

    setCartItems(updatedCartItems);
};


const handleTotal = () => {
    const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalCartItems(total);
  };

  
  const handleTotalQuantity = () => {
    const total = cartItems.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
  };

  
  useEffect(() => {
    handleTotal();
    handleTotalQuantity();
  }, [cartItems]);
   

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])

   
   
    
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

    return (<CartContex.Provider value={{cartItems,
      totalCartItems,
      totalQuantity,
      addItem,
      removeItem,
      clearCartItems,
      updateItemQuantity,
      setTotalQuantity}}> {children} </CartContex.Provider>);
};