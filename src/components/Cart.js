import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const itemCart = useContext(CartContext);
    return (
        <>
            <h2>Carrito</h2>
            {
                itemCart.cartList.length > 0
                    ? (
                        <div>
                            {
                                itemCart.cartList.map(item =>
                                    <div className="oneProductCard">
                                        <img
                                            className="oneProductCard__imagen"
                                            src={require(`../assets/productos/${item.img}`)}
                                            alt={item.name}
                                        />
                                        <div className="oneProductCard__info">
                                            <h2>{item.name}</h2>
                                            <h3>${item.price} c/u</h3>
                                        </div>
                                        <span>Cantidad: {item.quantity}</span>
                                        <span>Total: ${item.total}</span>
                                        <button type="button" onClick={() => itemCart.removeItem(item.id)} className="btn btn-danger btn-sm">Eliminar producto</button>
                                    </div>
                                )
                            }
                        <button type="button" onClick={() => itemCart.clear()} className="btn btn-danger btn-sm">Eliminar todo</button>
                        </div>
                        
                    )
                    : <span>Carrito Vacio</span>
            }
        </>
    );
}

export default Cart;