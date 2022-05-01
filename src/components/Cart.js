import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ReturnButton from '../utils/ReturnButton';
import { serverTimestamp, doc, collection, setDoc, } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Cart = () => {
    const itemCart = useContext(CartContext);
    let cartList = itemCart.cartList;
    // SweetAlert para pop-out al finalizar compra.
    const MySwal = withReactContent(Swal);

    const success = (MySwal, orderID, buyerName) => {
        MySwal.fire({
            title: "Orden Exitosa!",
            text: `${buyerName}, tu orden es ${orderID}`,
            icon: "success"
        });
    };

    const failed = (MySwal) => {
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
        })
    };

    const checkout = () => {
        const itemsForDB = itemCart.cartList.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price
        }));

        let order = {
            buyer: {
                name: "Lucas",
                email: "test@test.com",
                phone: "5412345678"
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

        createOrderFirestore()
            .then(result => success(MySwal, result.id, order.buyer.name))
            //Se actualiza stock luego de realizar la compra, no siempre. 
            //.then(updateStock)
            .then(itemCart.clear())
            .catch(err => failed(MySwal))
    }

    return (
        <div >
            <h2>Carrito</h2>
            <ReturnButton />
            {
                itemCart.cartList.length > 0
                    ? (
                        <div>
                            <button type="button" onClick={() => {itemCart.resetAllStock(); itemCart.clear();}} className="btn btn-danger btn-sm position-absolute top-0 end-0 mx-4 mt-3">Eliminar todo</button>
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
                                            <button type="button" onClick={() => {itemCart.resetItemStock(item.id, item.quantity);itemCart.removeItem(item.id, item.quantity);}} className="btn btn-danger btn-sm">Eliminar producto</button>
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