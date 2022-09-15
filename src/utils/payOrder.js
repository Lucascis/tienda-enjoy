import { serverTimestamp, doc, collection, setDoc, } from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import { success, failed } from '../utils/popups'; 

const payOrder = (userData, itemCart) => {
    let cartList = itemCart.cartList;
    const itemsForDB = cartList.map(item => ({
        id: item.id,
        title: item.name,
        price: item.price
    }));

    let order = {
        buyer: {
            name: userData.name,
            phone: userData.phone,
            email: userData.email,
            address: userData.address,
            city: userData.city,
            province: userData.province,
            postalCode: userData.postalCode,
            dni: userData.dni
        },
        date: serverTimestamp(),
        items: itemsForDB,
        total: itemCart.calcTotal()
    };
    console.log("orden ",order);

    const createOrderFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
    }
    const purchaseComplete = async () => {
        await createOrderFirestore()
            .then(itemCart.clear())
            .then(localStorage.clear())
            .then(result => success(result.id, order.buyer.name))
            .catch(err => {itemCart.resetAllStock(); failed(); console.log(err)});
    }
    purchaseComplete();
}

export default payOrder;