import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {
    return (
        <div className="productCard">
            <Link to={`/item/${id}`} className="productCard__enlace">
                <img
                    className="productCard__enlace-imagen"
                    src={require(`../assets/productos/${img}`)}
                    alt={name}
                />
                <div className="productCard__info">
                    <span className="productCard__info-productName">
                        {name}
                    </span>
                    <span className="productCard__info-productPrice">
                        ${price}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default Item;