import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const itemCart = useContext(CartContext);
    return (
        <div >
            <h2>Carrito</h2>
            <Link to="/">
                <button type="button" className="btn btn-danger btn-sm position-absolute top-0 start-0 mx-4">Volver a Inicio</button>
            </Link>
            {
                itemCart.cartList.length > 0
                    ? (
                        <div>
                            <button type="button" onClick={() => itemCart.clear()} className="btn btn-danger btn-sm position-absolute top-0 end-0 mx-4">Eliminar todo</button>
                            {
                                itemCart.cartList.map(item =>
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
                                            <button type="button" onClick={() => itemCart.removeItem(item.id)} className="btn btn-danger btn-sm">Eliminar producto</button>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="position-absolute bottom-0 end-0 mx-5">
                                <span>TOTAL(iva incl.): ${itemCart.calcTotal()}  </span>
                                <button type="button" className="btn btn-primary btn-sm">Terminar mi compra</button>
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