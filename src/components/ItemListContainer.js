import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
const { products } = require('../utils/products');


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(useParams());

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.category.id === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    return (
        <>
            <ItemList items={datos} />
        </>
    );
}
export default ItemListContainer;