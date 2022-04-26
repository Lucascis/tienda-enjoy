import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <> 
            <Link to="/cart">
                <button type="button" className="btn btn-danger btn-sm">Ir al Carrito</button>
            </Link>
        </>
    );
}

export default Checkout;