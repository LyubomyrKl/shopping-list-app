import React from 'react';
import cn from "classnames";
import './productModal.scss';
import { InputNumber, Button, Select } from 'antd';
import { closeActivePopup } from "../../slices/productsSlice";
import { useState } from "react";
import { addListItem } from "../../slices/shoppnigListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { newShoppingListItem } from "../../models/InewShoppinngListItem";
import {nanoid} from "@reduxjs/toolkit";

function ProductModal() {
    const {activeProductsWindow, activeProductsLabel, activePopup} = useAppSelector( state => state.products)

    const [measure, setMeasure] = useState('')
    const [countValue, setCountValue] = useState(1)
    const dispatch = useAppDispatch()

    const closePopup = (e:React.MouseEvent<Element, MouseEvent>) => {
        const target = e.target as Element;
        if(target.classList.contains('pupup')){
            dispatch(closeActivePopup())
        }
    }

    const setProduct = () => {
        const newItem: newShoppingListItem = {
            count: countValue,
            measure: measure,
            icon: activeProductsWindow,
            label: activeProductsLabel,
            id: nanoid()
        };
        dispatch(addListItem(newItem))
        dispatch(closeActivePopup())
    }

    const onHandleChange = (e:string) => {
        setMeasure(e)
    }

    const classez = cn('pupup', {
        'active': activePopup
    })
    const modalClass = cn('products-modal ', {
            "meat": activeProductsLabel === "Meat",
            "dairy": activeProductsLabel === "Dairy Products",
            "vegetable": activeProductsLabel === "Vegetables",
            "fruit": activeProductsLabel === "Fruits",
            "sweets": activeProductsLabel === "Sweets",
            "fastfood": activeProductsLabel === "Fastfood",
            "bakery": activeProductsLabel === "Bakery",
            "different": activeProductsLabel === "Different",
    })

    const { Option } = Select;
    return (
        <div className={classez} onClick={(e:React.MouseEvent<HTMLDivElement>)=>{closePopup(e)}}>
            <div className={modalClass}>
                <div className="front">
                    <h1>kek</h1>
                </div>
                <div className="back">
                    <img className={'product-svg products-modal-svg'}  src={`assets/products/${activeProductsWindow}`}/>
                    <InputNumber onChange={(e:number)=>{setCountValue(e)}} min={1} max={10} defaultValue={countValue} />
                    <Select defaultValue={'Kg'} style={{ width: 120 }} onChange={onHandleChange}>
                        <Option value="Gram">Gram</Option>
                        <Option value="Quantity">Quantity</Option>
                        <Option value="Liters">Liters</Option>
                    </Select>
                    <Button onClick={()=>{setProduct()}} ghost>TO LIST</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;