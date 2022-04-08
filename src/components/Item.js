import ItemCounts from "./ItemCounts";

const Item = ({ name, stock, price, img }) => {
    return (
        <div className="productCard">
            <a
                className="productCard__enlace"
                href="/categorias/teclados/alloy_fps_pro.html"
            >
                <img
                    className="productCard__enlace-imagen"
                    src={require(`../assets/productos/${img}.webp`)}
                    alt={name}
                />
                <div className="productCard__info">
                    <span className="productCard__info-productName">
                        {name}
                    </span>
                    <span className="productCard__info-productPrice">
                        ${price}
                    </span>
                    <span>
                        Stock: {stock}
                    </span>
                </div>

            </a>

            <ItemCounts stock={stock} initial={1} />
        </div>
    );
}

export default Item;