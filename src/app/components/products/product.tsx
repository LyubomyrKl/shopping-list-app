import React from 'react';

interface ProductProp {
    label: string,
    icon: string
}
function Product({label, icon}:ProductProp) {
    return (
        <div className='product'>
            <img className={'product-svg'}  src={`assets/products/${icon}`} alt={label}/>
            <span className={'product-label'}> {label}</span>
        </div>
    );
}

export default Product;