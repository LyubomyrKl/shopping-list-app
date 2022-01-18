import React, { useEffect } from "react";
import {Button, Tag, Table} from "antd";
import './Calories.scss'
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import caloriesData from "../../resourse/СaloriesData";
import { fetchCaloriesData, setActiveDay, addDay } from "../../slices/caloriesSlice";
import { AiOutlinePlus } from "react-icons/ai";
import ProductModal from "../../components/modal/Modal";
import { toggleActiveModal } from "../../slices/modalSlice";
import CaloriesModal from "../../components/modal/caloriesModal/caloriesModal";
import {
    CheckCircleOutlined,
} from '@ant-design/icons';
import { nanoid } from "@reduxjs/toolkit";
import { ICaloriesDay, ICaloriesProduct } from "../../models/ICaloriesData";

const Calories: React.FC = () => {

    const dispatch = useAppDispatch();
    const { days, columns } = caloriesData.data


    useEffect(() => {
        dispatch(fetchCaloriesData(days))
        dispatch(setActiveDay(days.length-2))
    }, [days, dispatch])


    const daysData = useAppSelector( state => state.calories.days)
    const activeDay = useAppSelector( state => state.calories.activeDay)

    const countTotalByKcal = (arr:ICaloriesProduct[]):number => {
        let total = 0;
        arr.forEach( item => {
            total += item['kcal'];
        })
        return total
    }

    const addDayHandler = ():void => {
        const date = new Date()
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
        function getZero(num:number){
            if(num >= 0 && num < 10){
                return `0${num}`;
            }else{
                return num;
            }
        }
        const obj:ICaloriesDay = {
            id: nanoid(),
            date: `${day}.${getZero(month+1)}.${year}`,
            products: [],
        }
        dispatch(addDay(obj))
    }

    const divs = daysData.map((item, index) => {

        const total = countTotalByKcal(item.products);
        let status;

        switch (true){
            case total < 1000 :
                status = <Tag icon={<CheckCircleOutlined/>} color={"warning"}>Too small</Tag>;
                break;
            case total >1000 && total < 2500 :
                status = <Tag icon={<CheckCircleOutlined/>} color={"success"}>Perfect !</Tag>;
                break;
            case total > 2500 :
                status = <Tag icon={<CheckCircleOutlined/>} color={"error"}>Too much...</Tag>
                break
        }


        return (
            <div key={item.id}  className={'calories-day'}>
                {/* div for adding handlers on table*/}
                <h1>{item.date}</h1>
                <div onClick={()=>{dispatch(setActiveDay(index))}}>
                    <Table  pagination={false} columns={columns} dataSource={item.products}/>
                </div>
                <div className={'total-wrapper'}>
                {
                    (index === activeDay) ?
                    <Button type="primary" onClick={()=>dispatch(toggleActiveModal())} ghost>
                        <AiOutlinePlus/>
                        <span >Add product</span>
                    </Button>
                    :
                    <>{status}</>
                }
                    <span>Total:{total}</span>
                </div>
            </div>
        )
    })

    return(
        <div className="page-wrapper calories-page">
            {divs}
            <Button onClick={addDayHandler} ghost>Create day</Button>
                <ProductModal modalClasses={'calories-modal'}>
                    <CaloriesModal/>
                </ProductModal>
        </div>
    )
}

export default Calories

