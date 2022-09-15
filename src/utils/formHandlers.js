const handlePropName = (e, length, state) => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z0-9À-ÿ\u00f1\u00d1 ]/g, "");
    value = value.toUpperCase();
    if (value.length <= length) {
        state(value);
    }
};

const handleEmail = (e, state) => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z0-9@-_.]/g, "");
    state(value);
};

const handleNumbers = (e, length, state) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length <= length) {
        state(value);
    } else {
        state(value.slice(0, length));
    }
};

//handle postal code allows one letter first and then 4 numbers
const handlePostalCode = (e, state) => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z0-9]/g, "");
    value = value.toUpperCase();
    if (value.length <= 5) {
        state(value);
    } else { 
        state(value.slice(0, 5));
    }
};

const handleCardNumber = (e, state) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ");
    value = value.trim();
    if (value.length <= 19) {
        state(value);
    }
};

const handleExpirationDate = (e, state) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    if (value.length <= 5) {
        state(value);
    }
};

export { handlePropName, handleEmail, handleNumbers, handleCardNumber, handleExpirationDate, handlePostalCode };