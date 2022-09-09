import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const fetchItemFirestore = async () => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            const docFirestore = {
                id: docSnap.id,
                ...docSnap.data()
            }
            return docFirestore;
        };
        fetchItemFirestore()
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);
    return (
        <ItemDetail item={ dato } />
    );
}

export default ItemDetailContainer;