import { useEffect, useState } from "react";

const ItemCounts = ({ stock = 0, initial = 1}) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
            console.log(count, stock)
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const onAdd = (qty) => {
        console.log(`Seleccionó ${qty} items.`)
    }

    return (
        <div className="itemCounts" >
            <button type="button" onClick={decrement} className="btn btn-danger btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
            </button>
            <p>{count}</p>
            <button type="button" onClick={increment} className="btn btn-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
            {
                stock
                ?<button type="button" onClick={() => onAdd(count)} className="btn btn-primary btn-sm">Agregar al carrito</button>
                :<button type="button" onClick={() => onAdd(count)} className="btn btn-primary btn-sm" disabled>Agregar al carrito</button>
            }
        </div >
    );
}

export default ItemCounts;