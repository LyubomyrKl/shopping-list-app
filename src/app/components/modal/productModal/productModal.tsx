import React, { useState } from 'react';
import { Button, InputNumber, Select } from "antd";
import { newShoppingListItem } from "../../../models/InewShoppinngListItem";
import { nanoid } from "@reduxjs/toolkit";
import { addListItem } from "../../../slices/shoppnigListSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import './producModal.scss'
import { toggleActiveModal } from "../../../slices/modalSlice";
const ProductModal = () => {

    const dispatch = useAppDispatch()
    const [measure, setMeasure] = useState('Kg')
    const [countValue, setCountValue] = useState(1)
    const { activeProductsWindow, activeProductsCategory } = useAppSelector( state => state.products)

    const setProduct = () => {
        const newItem: newShoppingListItem = {
            count: countValue,
            measure: measure,
            icon: activeProductsWindow,
            category: activeProductsCategory,
            id: nanoid()
        };
        dispatch(addListItem(newItem))
        dispatch(toggleActiveModal())
        setCountValue(1)
    }


    const { Option } = Select;
    return (
        <div className={"products-modal-popup"}>
            <div className="front">
                <h1>Front</h1>
            </div>
            <div className="back">
                <img className={'product-svg products-modal-svg'}  src={`assets/products/${activeProductsWindow}`}/>
                <InputNumber onChange={(e:number)=>{setCountValue(e)}} min={1} defaultValue={countValue} />
                <Select defaultValue={'Kg'} style={{ width: 120 }} onChange={(e)=>{ setMeasure(e)}}>
                    <Option value="Gram">Gram</Option>
                    <Option value="Quantity">Quantity</Option>
                    <Option value="Liters">Liters</Option>
                </Select>
                <Button onClick={()=>{setProduct()}} ghost>TO LIST</Button>
            </div>
        </div>
    );
};

export default ProductModal;