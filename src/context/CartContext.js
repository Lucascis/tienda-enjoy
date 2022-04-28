import { createContext, useState } from 'react';
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (itemId) => cartList.some(item => item.id === itemId)

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCartList = cartList.map(cartElement => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity, subtotal: cartElement.subtotal + (item.price * quantity) }
                } else return cartElement;
            })
            setCartList([...newCartList]);
        } else {
            setCartList([
                ...cartList, { ...item, quantity, subtotal: item.price * quantity }
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

    const calcQty = () => {
        let totalQty = 0;
        cartList.map(cartElement => (
            totalQty += cartElement.quantity
        ));
        return totalQty;
    }

    const calcTotal = () => {
        let totalPrice = 0;
        cartList.map(cartElement => (
            totalPrice += cartElement.subtotal
        ));
        return totalPrice;
    }
    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, calcQty, calcTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;