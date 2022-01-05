import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Row, Col, Collapse } from 'antd';
import * as AiIcons from "react-icons/ai";
import cn from 'classnames'
import { ProductsData } from "../../resourse/ProductsData";
import { fetchProducts } from "../../slices/productsSlice";
import Product from "../../components/products/product";
import ProductModal from "../../components/modal/productModal";
import '../../pages/Products/Product.scss'
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../models/IProduct";

const Products = () => {

    const dispatch = useAppDispatch()
    dispatch(fetchProducts(ProductsData));
    const product: typeof ProductsData = useAppSelector(state => state.products.productsList)
    const { Panel } = Collapse;

    const renderProducts = (array:Array<object>, label: string) => {

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

        const products = array.map((item:any) => {
            return <Col key={nanoid()}> <Product  productName={item.name} label={label} icon={item.icon}/> </Col>
        })

        return (
            <div className={classez}>
                <Collapse accordion>
                    <Panel showArrow={false} header={<div className={'products-header'}>{label}<AiIcons.AiOutlineDown/></div>}  key={nanoid()}>
                        <Row justify={"space-around"} gutter={[10, 10]}>
                            {products}
                        </Row>
                    </Panel>
                </Collapse>
            </div>
        )
    }

    return(
        <>
            <div data-testid='products' className='page-wrapper page-wrapper__products'>
                {renderProducts(product.MeatData , "Meat")}
                {renderProducts(product.DairyProductsData, 'Dairy Products')}
                {renderProducts(product.VegetablesData, "Vegetables")}
                {renderProducts(product.FruitsData, "Fruits")}
                {renderProducts(product.BakeryData, "Bakery")}
                {renderProducts(product.SweetsData, "Sweets")}
                {renderProducts(product.etcProductsData, "Different")}
                {renderProducts(product.FastFoodData, "Fastfood")}
            </div>
            <ProductModal/>
        </>
    )


}

export default Products