import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import OutputList from './components/OutputList';
import TotalPriceValue from './components/TotalPriceValue';

const App = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('productDetails')) || []);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
       
        let totalPrice = 0;
        for (let i = 0; i < products.length; i++) {
            totalPrice += +products[i].Price;
        }
        setTotalPrice(totalPrice);
     }, [products]);


    const saveDataHandler = (productData) => {
        localStorage.setItem('productDetails', JSON.stringify([...products, productData]));
        setProducts((prevProducts) => [...prevProducts, productData]);
    };

    const deleteHandler = (id) => {
    const updatedProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].ID !== id) {
            updatedProducts.push(products[i]);
        }
    }
    localStorage.setItem('productDetails', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
};


    return (
        <div>
            <InputForm onSaveData={saveDataHandler} />
            <OutputList products={products} onDelete={deleteHandler} />
            <TotalPriceValue totalPrice={totalPrice} />
        </div>
    );
};

export default App;
