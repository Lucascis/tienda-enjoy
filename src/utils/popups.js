import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const success = (orderID, buyerName) => {
    MySwal.fire({
        title: "Orden Exitosa!",
        text: `${buyerName}, tu orden es ${orderID}`,
        icon: "success"
    });
};

const failed = () => {
    MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal!',
    })
};

const getName = async () => {
    const { value: name } = await MySwal.fire({
        title: 'Ingresa tu nombre y apellido',
        input: 'text',
        inputLabel: '',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
        
    })
    return name;
}

const getEmail= async () => {
    const { value: email } = await MySwal.fire({
        title: 'Ingresa tu Email',
        input: 'email',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
        
    })
    return email;
}

const getPhone= async () => {
    const { value: phone } = await MySwal.fire({
        title: 'Enter your phone',
        input: 'tel',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
        
    })
    return phone;
}

const getDataClient = async () => {
    const clientName = await getName();
    const clientEmail = await getEmail();
    const clientPhone = await getPhone();

    return {clientName, clientEmail, clientPhone};
}
export { success, failed, getDataClient};