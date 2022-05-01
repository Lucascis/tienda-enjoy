import { createContext, useState } from 'react';
import { increment, updateDoc, doc } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const updateStock = async (itemID, itemQty) => {
        const itemRef = doc(db, "products", itemID);
        await updateDoc(itemRef, {
            stock: increment(-itemQty)
        });
        console.log('Stock updated', itemQty);
    };

    const resetItemStock = async (itemId, itemQty) => {
        const itemRef = doc(db, "products", itemId);
        await updateDoc(itemRef, {
            stock: increment(itemQty)
        });
        console.log('Stock resetItemStock')
    };

    const resetAllStock = () => {
        cartList.forEach(async (itemId) => {
            const itemRef = doc(db, "products", itemId.id);
            await updateDoc(itemRef, {
                stock: increment(itemId.quantity)
            });
            console.log('Stock resetAllStock');
        });
    }

    const isInCart = (itemId) => cartList.some(item => item.id === itemId);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCartList = cartList.map(cartElement => {
                if (cartElement.id === item.id) {
                    return {
                        ...cartElement,
                        quantity: cartElement.quantity + quantity,
                        stock: cartElement.stock - quantity,
                        subtotal: cartElement.subtotal + (item.price * quantity)
                    };
                } else return cartElement;
            });
            setCartList([...newCartList]);
        } else {
            setCartList([
                ...cartList, { ...item, quantity, subtotal: item.price }
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
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, calcQty, calcTotal, updateStock, resetAllStock, resetItemStock }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;