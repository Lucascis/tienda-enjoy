import '../scss/_etiquetaProducto.scss';

import ItemCount from './ItemCounts';

const ItemListContainer = (props) => {
    return (
        <div className="productCard">
            <a
                className="productCard__enlace"
                href="/categorias/teclados/alloy_fps_pro.html"
            >
                <img
                    className="productCard__enlace-imagen"
                    src={require(`../assets/productos/${props.imgProducto}.webp`)}
                    alt={props.nombreProducto}
                />
                <div className="productCard__info">
                    <span className="productCard__info-productName">
                        {props.nombreProducto}
                    </span>
                    <span className="productCard__info-productPrice"> 
                        ${props.precioProducto} 
                    </span>
                </div>
            </a>
            <ItemCount stock="5" initial="1"/>
        </div>
        
    );
}
export default ItemListContainer;