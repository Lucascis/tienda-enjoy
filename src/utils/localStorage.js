const setData = (setCartList) => {
    localStorage.setItem('cartData', JSON.stringify(setCartList))
}

const getData = () => {
    return JSON.parse(localStorage.getItem('cartData'));
}

export {setData, getData};