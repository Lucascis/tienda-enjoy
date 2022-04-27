import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import ItemList from "./ItemList";

import { collection, getDocs, query, where} from "firebase/firestore";
import db from '../utils/firebaseConfig';


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const fetchFirestore = async () => {
            let queryFilter
            if (idCategory === undefined) {
                queryFilter = collection(db, "products")
                
            } else{
                queryFilter = query(collection(db, "products"), where("idCategory", "==", parseInt(idCategory)))
            }
            const querySnapshot = await getDocs(queryFilter);
            const dataFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFirestore;
        }
        fetchFirestore()
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [datos]);

    return (
        <>
            <ItemList items={datos} />
        </>
    );
}
export default ItemListContainer;