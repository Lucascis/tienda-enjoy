import { Link } from "react-router-dom";

const ReturnButton = () => {
    return (
        <Link to="/">
            <button type="button" className="btn btn-danger btn-sm position-absolute top-0 start-0 mx-4 mt-3">Volver a Inicio</button>
        </Link>
    );
}

export default ReturnButton;