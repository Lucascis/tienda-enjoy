import { Link } from 'react-router-dom';

const Item = ({ id, name, price, imgURL, category}) => {
    return (
        <div className="productCard">
            <Link to={`/categoria/${category}/${id}`} className="productCard__enlace">
                <img
                    className="productCard__enlace-imagen"
                    src={imgURL}
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