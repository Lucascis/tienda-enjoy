import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (itemId) => cartList.some(item => item.id === itemId)

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCartList = cartList.map(cartElement => {
                if (cartElement.id === item.id) {
                    return{...cartElement, quantity: cartElement.quantity + quantity, total: cartElement.total + (item.price*quantity)}
                } else return cartElement;
            })
            setCartList([...newCartList]);
        } else {
            setCartList([
                ...cartList, {...item, quantity, total: item.price * quantity}
            ]);
        }
    }


    const removeItem = (itemId) => {
        setCartList([
            ...cartList.filter(item => item.id !== itemId)
        ]);
    }

    const clear = () => {
        setCartList([]);
    }


    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;