import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Row, Col } from 'antd';
import * as AiIcons from "react-icons/ai";
import cn from 'classnames'
import { Collapse } from 'antd';
import {
        VegetablesData,
        MeatData,
        FastfoodData,
        FruitsData,
        DairyProductsData,
        etcProdutsData,
        SweetsData,
        BakeryData
        } from "../../resourse/ProductsData";

import Product from "../../components/products/product";
import '../../pages/Products/Product.scss'

const Products = () => {

    const { Panel } = Collapse;

    const renderProducts = (array:Array<any>, label: string) => {
        const classez = cn('products-wrapper', {
            "meat": label === "Meat",
            "dairy": label === "Dairy Products",
            "vegetable": label === "Vegetables",
            "fruit": label === "Fruits",
            "sweets": label === "Sweets",
            "fastfood": label === "Fastfood",
            "bakery": label === "Bakery",
            "different": label === "Different",
        })

        const products = array.map(({name, icon}: any) => {
            return <Col key={nanoid()}> <Product  label={name} icon={icon}/> </Col>
        })

        return (
            <div className={classez}>
                <Collapse accordion>
                    <Panel showArrow={false} header={<div>{label}<AiIcons.AiOutlineDown/></div>}  key={nanoid()}>

                        <Row justify={"space-around"} gutter={[10, 10]}>
                            {products}
                        </Row>
                    </Panel>
                </Collapse>
            </div>
        )
    }

    return(
        <div data-testid='products' className='page-wrapper page-wrapper__products'>
            {renderProducts(MeatData , "Meat")}
            {renderProducts(DairyProductsData, 'Dairy Products')}
            {renderProducts(VegetablesData, "Vegetables")}
            {renderProducts(FruitsData, "Fruits")}
            {renderProducts(BakeryData, "Bakery")}
            {renderProducts(SweetsData, "Sweets")}
            {renderProducts(etcProdutsData, "Different")}
            {renderProducts(FastfoodData, "Fastfood")}

        </div>
    )
}

export default Products