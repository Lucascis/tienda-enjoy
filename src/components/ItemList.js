import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            <h2>Productos</h2>
            <section className="grid">
                {
                    items.length > 0
                        ? items.map(item => <Item key={item.id} name={item.name} price={item.price} img={item.img} stock={item.stock} />)
                        : <p>Cargando...</p>
                }
            </section>
        </>
    );
}

export default ItemList;