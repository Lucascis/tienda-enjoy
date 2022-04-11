import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCounts';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        console.log(`Seleccionaste ${qty} items.`);
        setItemCount(qty);
    }

    return (
        <>
            {
                item && item.img
                    ?
                    <div>
                        <div className="oneProductCard">
                            <img
                                className="oneProductCard__imagen"
                                src={require(`../assets/productos/${item.img}`)}
                                alt={item.name}
                            />
                            <div className="oneProductCard__info">
                                <h2>{item.name}</h2>
                                <h3>${item.price}</h3>
                                {
                                itemCount === 0
                                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                    : <p>Checkout(proximamente.)</p>
                                }
                                <span>
                                    Stock: {item.stock}
                                </span>
                                <div className="oneProductCard__info-video">
                                    <iframe
                                        className="oneProductCard__info-video-iframe"
                                        src="https://www.youtube.com/embed/NjoKy91bWkM"
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
                    : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;