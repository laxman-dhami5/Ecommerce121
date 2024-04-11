import React, { useState } from 'react';

const InputForm = (props) => {
    const [productId, setProductId] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productName, setProductName] = useState('');

    const productIDChangeHandler = (event) => {
        setProductId(event.target.value);
    };

    const productPriceChangeHandler = (event) => {
        setProductPrice(event.target.value);
    };

    const productNameChangeHandler = (event) => {
        setProductName(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const newProduct = {
            ID: productId,
            Name: productName,
            Price: productPrice
        };
        props.onSaveData(newProduct);
        setProductId('');
        setProductName('');
        setProductPrice('');
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Product ID</label>
                <input type="number" value={productId} onChange={productIDChangeHandler} />
                <label>Product Price</label>
                <input type="number" value={productPrice} onChange={productPriceChangeHandler} />
                <label>Product Name</label>
                <input type="text" value={productName} onChange={productNameChangeHandler} />
                
                <button type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default InputForm;
