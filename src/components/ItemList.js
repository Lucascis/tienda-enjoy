import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            <h2>Productos</h2>
            <div className="grid">
                {
                    items.length > 0
                        ? items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} videoUrl={item.videoUrl} stock={item.stock} />)
                        : <p>Cargando...</p>
                }
            </div>
        </>
    );
}

export default ItemList;