/* eslint-disable */
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const itemCart = useContext(CartContext);
    let cartList = itemCart.cartList;

    return (
        <div className="position-relative">
            <Link to="/">
                <button aria-label="Ir al inicio de la pagina" type="button" className="btn btn-danger btn-sm position-absolute top-0">Volver a Inicio</button>
            </Link>
            <h2>Carrito</h2>
            {
                cartList.length > 0
                    ? (
                        <div>
                            <button type="button" onClick={() => { itemCart.resetAllStock(); itemCart.clear(); }} className="btn btn-danger btn-sm position-absolute top-0 end-0">Eliminar todo</button>
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
                                    <Link to="/payment">
                                        <button type="button" className="btn btn-primary btn-sm ms-2 mb-2">Terminar mi compra</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div className="d-flex justify-content-center my-4">
                            <span>Carrito Vacio</span>
                        </div>
                    )
            }
        </div>
    );
};

export default Cart;