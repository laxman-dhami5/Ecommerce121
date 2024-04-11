import React, { useState } from 'react';

const OutputList = (props) => {
    const [data,setData]=useState()
    const onDeleteHandler = (id) => {
        props.onDelete(id);
    };
    
    const onEditHandler = (event) => {
       setData(event.target.value)
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {props.products.map((product) => (
                    <li key={product.ID}>
                        ID: {product.ID}, Name: {product.Name}, Price: ${product.Price}
                        <button onClick={onEditHandler} value={data} >Edit</button>
                        <button onClick={() => onDeleteHandler(product.ID)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OutputList;
