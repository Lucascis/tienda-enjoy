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

export { success, failed };