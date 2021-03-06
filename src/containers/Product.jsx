import React from 'react';


const Products =  ({product, handleAddToCart}) => (
        <div className="Products-item">
            <img src={product.image} alt={product.title}/>
            <div className="Product-item-info">
                <h2>{product.title}
                <span>{' '}${' '}{product.price}</span></h2>
                <p className="">{product.description}</p>
            </div>
            <button type="button" onClick={ handleAddToCart(product) }>Comprar</button>
        </div>
    )

    export default Products