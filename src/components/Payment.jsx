import { Form, Button, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';
import { Navigate } from "react-router-dom";
import payOrder from "../utils/payOrder";
import { handlePropName, handleEmail, handleNumbers, handleCardNumber, handleExpirationDate, handlePostalCode } from "../utils/formHandlers";

const Payment = () => {

    const itemCart = useContext(CartContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [dni, setDni] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");

    //
    const handleSubmit = (e) => {
        e.preventDefault();
        payOrder(sendData(), itemCart);
    };

    //valida que los campos no esten vacios
    const validateForm = () => {
        if (
            name === "" ||
            email === "" ||
            cardNumber === "" ||
            expirationDate === "" ||
            cvv === "" ||
            dni === "" ||
            phone === "" ||
            address === "" ||
            city === "" ||
            province === "" ||
            postalCode === ""
        ) { return false; }
        return true;
    };

    //recopila los datos del formulario
    const sendData = () => {
        const data = {
            name: name.trim(),
            email: email.trim(),
            address: address.trim(),
            city: city.trim(),
            province: province.trim(),
            phone: phone,
            postalCode: postalCode,
            dni: dni,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            cvv: cvv,
        };
        return data;
    };

    return (
        <>
            {
                itemCart.cartList.length > 0 ? (
                    <Form className="d-flex flex-column mx-5" autoComplete="off">
                        <Row className="md-3">
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Jane Doe"
                                    value={name}
                                    onChange={(e) => handlePropName(e, 30, setName)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="janedoe@correo.com"
                                    value={email}
                                    onChange={(e) => handleEmail(e, setEmail)}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="street-address">
                                <Form.Label>Dirreccion</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Calle 1234"
                                    value={address}
                                    onChange={(e) => handlePropName(e, 30, setAddress)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="city">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control
                                    type="city"
                                    placeholder="Buenos Aires"
                                    value={city}
                                    onChange={(e) => handlePropName(e, 20, setCity)}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="state">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    type="province"
                                    placeholder="Buenos Aires"
                                    value={province}
                                    onChange={(e) => handlePropName(e, 20, setProvince)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="CP">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control
                                    type="postalCode"
                                    placeholder="5000"
                                    value={postalCode}
                                    onChange={(e) => handlePostalCode(e, setPostalCode)}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="DNI">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control
                                    type="dni"
                                    placeholder="12345678"
                                    value={dni}
                                    onChange={(e) => handleNumbers(e, 8, setDni)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="phone">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    type="phone"
                                    placeholder="1122334455"
                                    value={phone}
                                    onChange={(e) => handleNumbers(e, 13, setPhone)}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="cc-number">
                                <Form.Label>Numero de Tarjeta</Form.Label>
                                <Form.Control
                                    type="cardNumber"
                                    autoComplete="cc-number"
                                    placeholder="1234 5678 9012 3456"
                                    value={cardNumber}
                                    onChange={(e) => handleCardNumber(e, setCardNumber)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="cc-exp">
                                <Form.Label>Vencimiento</Form.Label>
                                <Form.Control
                                    name="cc-exp"
                                    type="expirationDate"
                                    autoComplete="cc-exp"
                                    placeholder="MM/AA"
                                    value={expirationDate}
                                    onChange={(e) => handleExpirationDate(e, setExpirationDate)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="cc-csc">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control
                                    type="cvv"
                                    placeholder="123"
                                    value={cvv}
                                    onChange={(e) => handleNumbers(e, 3, setCvv)}
                                />
                            </Form.Group>
                        </Row>

                        {validateForm() ? (
                            <Button className="w-50 mx-auto" variant="primary" type="submit" onClick={handleSubmit}>
                                Comprar
                            </Button>
                        ) : (
                            <Button className="w-50 mx-auto" variant="primary" type="submit" disabled>
                                Comprar
                            </Button>
                        )}
                    </Form>
                ) : (
                    <Navigate to="/" />
                )}
        </>
    );
};

export default Payment;

