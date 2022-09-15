import { useEffect, useState } from "react";
import { useParams } from 'react-router';

import ItemList from "./ItemList";

import { collection, getDocs, query, where} from "firebase/firestore";
import db from '../utils/firebaseConfig';

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);
    const { nameCategory } = useParams();

    useEffect(() => {
        const fetchFirestore = async () => {
            let queryFilter;
            if (nameCategory === undefined) {
                queryFilter = collection(db, "products")
                
            } else{
                queryFilter = query(collection(db, "products"), where("nameCategory", "==", nameCategory))
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
    }, [nameCategory]);

    return (
        <>
            <ItemList items={datos} />
        </>
    );
}
export default ItemListContainer;