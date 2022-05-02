import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ReturnButton from '../utils/ReturnButton';
import { serverTimestamp, doc, collection, setDoc, } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

import { success, failed, getDataClient } from '../utils/popups'

const Cart = () => {
    const itemCart = useContext(CartContext);
    let cartList = itemCart.cartList;
    const checkout = () => {
        const itemsForDB = itemCart.cartList.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price
        }));

        let order = {
            buyer: {
                name: '',
                email: '',
                phone: ''
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: itemCart.calcTotal()
        };

        const createOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        //Funcion async para ejecutar los popups getDataClient luego crea orden.
        const purchaseComplete = async () => {
            await getDataClient()
                .then(response => (
                    order.buyer.name = response.clientName,
                    order.buyer.email = response.clientPhone,
                    order.buyer.phone = response.clientEmail
                ))
            await createOrderFirestore()
                .then(result => success(result.id, order.buyer.name))
                .then(itemCart.clear())
                .then(localStorage.clear())
                .catch(err => { failed(); itemCart.resetAllStock() })
        }
        purchaseComplete()
    }

    return (
        <div>
            <h2>Carrito</h2>
            <ReturnButton />
            {
                itemCart.cartList.length > 0
                    ? (
                        <div>
                            <button type="button" onClick={() => { itemCart.resetAllStock(); itemCart.clear(); }} className="btn btn-danger btn-sm position-absolute top-0 end-0 mx-4 mt-3">Eliminar todo</button>
                            {
                                cartList.map(item =>
                                    <div className="oneProductCart" key={item.id}>
                                        <div className='oneProductCartImgContainer'>
                                            <img
                                                src={item.imgURL}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="oneProductCart__info">
                                            <h2>{item.name}</h2>
                                            <h3>${item.price} c/u</h3>
                                        </div>
                                        <div className="itemTotal">
                                            <span>Cantidad: {item.quantity}</span>
                                            <span>Subtotal: ${item.subtotal}</span>
                                            <button type="button" onClick={() => { itemCart.resetItemStock(item.id, item.quantity); itemCart.removeItem(item.id, item.quantity); }} className="btn btn-danger btn-sm">Eliminar producto</button>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="position-relative my-4">
                                <div className="position-absolute top-50 end-0 translate-middle-y">
                                    <span>TOTAL(iva incl.): ${itemCart.calcTotal()}  </span>
                                    <button type="button" onClick={checkout} className="btn btn-primary btn-sm mx-2 mb-2">Terminar mi compra</button>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div>
                            <span className='position-absolute top-50 start-50 translate-middle mt-4'>Carrito Vacio</span>
                        </div>
                    )
            }
        </div>
    );
}

export default Cart;