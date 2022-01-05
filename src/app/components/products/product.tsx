import React from 'react';
import './product.scss'
import { openActivePopup } from "../../slices/productsSlice";
import { useAppDispatch } from "../../hooks/hooks";

interface ProductProp {
    productName:string,
    label: string,
    icon: string
}

function Product({label, icon, productName}:ProductProp) {
    const dispatch = useAppDispatch()
    return (
        <div className='product' onClick={(e) => {  dispatch(openActivePopup({svg:icon, label: label}))}}>
           <div className="icon-container">
               <img className={'product-svg'}  src={`assets/products/${icon}`} alt={productName}/>
               <img className={'product-svg'}  src={`assets/products/${icon}`} alt={productName}/>
           </div>
           <span className={'product-label'}>{productName}</span>
        </div>
    );
}

export default Product;