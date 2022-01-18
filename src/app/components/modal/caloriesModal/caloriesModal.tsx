import React, { useState } from 'react';
import './caloriesModal.scss'
import { Button, InputNumber, Input } from "antd";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../hooks/hooks";
import { addProductToDay } from "../../../slices/caloriesSlice";
import { toggleActiveModal } from "../../../slices/modalSlice";
import { ICaloriesProduct } from "../../../models/ICaloriesData";

const CaloriesModal: React.FC = () => {

    const [productName, setProductName] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(0)
    const [kcal, setKcal] = useState<number>(0)
    const dispatch = useAppDispatch();


    const productNameValidate = (value:string):void => {
        const regExp = /^[a-zA-Z\s]*$/
        if(value.match(regExp)){
            setProductName(value)
        }
    }

    const addProduct = ():void => {
        if(productName.length && quantity && kcal >0){
            const obj: ICaloriesProduct = {
                key: nanoid(),
                product: productName,
                value: quantity,
                kcal: kcal/100*quantity
            }
            dispatch(addProductToDay(obj))
            dispatch(toggleActiveModal())
            setProductName('')
            setQuantity(0);
            setKcal(0);
        }
    }

    return (
        <div className={'calories-modal-form'}>
            <div className={'calories-input-wrapper'}>
                <span className={'calories-input-label'}>Product:</span>
                <Input onChange={event => productNameValidate(event.target.value)} placeholder={"Product"} value={productName}/>
            </div>
            <div className={'calories-input-wrapper'}>
                <span className={'calories-input-label'}>Quantity g:</span>
                <InputNumber onChange={(e) => setQuantity(e)} placeholder={'Quantity'} value={quantity}/>
            </div>
            <div className={'calories-input-wrapper'}>
                <span className={'calories-input-label'}>Kcal / 100g:</span>
                <InputNumber onChange={(e) => setKcal(e)} placeholder={'Kcal'} value={kcal} />
            </div>
            <Button onClick={addProduct}>Add</Button>
        </div>
    );
};

export default CaloriesModal;

