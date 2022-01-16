import React from 'react';
import { renderProductModal } from "../../slices/productsSlice";
import { toggleActiveModal } from "../../slices/modalSlice";
import { useAppDispatch } from "../../hooks/hooks";

interface ProductProp {
    productName:string,
    category: string,
    icon: string
}

function Product({category, icon, productName}:ProductProp) {
    const dispatch = useAppDispatch()

    const openProductModal = () => {
        dispatch(toggleActiveModal());
        dispatch(renderProductModal({icon, category}))
    }

    return (
        <div className='product' onClick={openProductModal}>
           <div className="icon-container">
               <img className={'product-svg'}  src={`assets/products/${icon}`} alt={productName}/>
               <img className={'product-svg'}  src={`assets/products/${icon}`} alt={productName}/>
           </div>
           <span className={'product-label'}>{productName}</span>
        </div>
    );
}

export default Product;