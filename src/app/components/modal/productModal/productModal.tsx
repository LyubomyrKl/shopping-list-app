import React, { useState } from 'react';
import { Button, InputNumber, Select, Spin } from "antd";
import { newShoppingListItem } from "../../../models/InewShoppinngListItem";
import { nanoid } from "@reduxjs/toolkit";
import { addListItem } from "../../../slices/shoppnigListSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import './producModal.scss'
import { toggleActiveModal } from "../../../slices/modalSlice";


const ProductModal:React.FC = () => {

    const dispatch = useAppDispatch()
    const [measure, setMeasure] = useState<string>('Kg')
    const [countValue, setCountValue] = useState<number>(1)
    const { activeProductsWindow, activeProductsCategory, productsList } = useAppSelector( state => state.products )

    const setProduct = ():void => {
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

    const renderOption = () => {
         const currentObj = productsList.find( obj => {
             return obj.category === activeProductsCategory
         })

        // @ts-ignore

        if(currentObj){
            return(
                <Select defaultOpen={true} defaultValue={currentObj.metrics[0]} onChange={(e)=>{ setMeasure(e)}}>
                    {currentObj.metrics.map( (item:string, index) => {

                            return <Option checked key={nanoid()} value={item}>{item}</Option>


                    })}
                </Select>
            )
        }

    }

    return (
        <div className={"products-modal-popup"}>
            <div className="front">
                <h1>Front</h1>
            </div>
            <div className="back">
                <img className={'product-svg products-modal-svg'}  src={`assets/products/${activeProductsWindow}`}/>
                <InputNumber onChange={(e:number)=>{setCountValue(e)}} min={1} defaultValue={countValue} />
                {renderOption()}
                <Button onClick={()=>{setProduct()}} ghost>TO LIST</Button>
            </div>
        </div>
    );
};

export default ProductModal;

