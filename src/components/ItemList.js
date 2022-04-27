import Item from "./Item";
import SpinLoader from "../utils/SpinLoader";

const ItemList = ({ items }) => {
    return (
        <>
            <h2>Productos</h2>
            <div className="grid">
                {
                    items.length > 0
                        ? items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price} imgURL={item.imgURL} />)
                        : <SpinLoader/>
                }
            </div>
        </>
    );
}

export default ItemList;