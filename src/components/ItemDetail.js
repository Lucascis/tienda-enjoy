import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import Checkout from '../utils/Checkout';
import SpinLoader from '../utils/SpinLoader'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const itemCart = useContext(CartContext);

    const onAdd = (qty) => {
        setItemCount(qty);
        itemCart.addItem(item, qty);
    }
    return (
        <>
            {
                item && item.imgURL
                    ?
                    <div>
                        <div className="oneProductCard">
                            <img
                                className="oneProductCard__imagen"
                                src={item.imgURL}
                                alt={item.name}
                            />
                            <div className="oneProductCard__info">
                                <h2>{item.name}</h2>
                                <h3>${item.price}</h3>
                                {
                                    itemCount === 0
                                        ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                                        : <Checkout />
                                }


                                <span>
                                    Stock: {item.stock}
                                </span>
                                <div className="oneProductCard__info-video">
                                    <iframe
                                        className="oneProductCard__info-video-iframe"
                                        src={item.videoURL}
                                        title={item.name}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="oneProductCard__description">
                            <h3>Descripcion</h3>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    :
                    <SpinLoader/>

            }
        </>
    );
}

export default ItemDetail;