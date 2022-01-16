import React, {useEffect} from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Row, Col, Collapse } from 'antd';
import { AiOutlineDown } from "react-icons/ai";
import cn from 'classnames'

import { fetchProducts} from "../../slices/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ProductsData } from "../../resourse/ProductsData";

import Product from "../../components/products/product";
import Modal from "../../components/modal/Modal";
import ProductModal from "../../components/modal/productModal/productModal";
import '../../pages/Products/Product.scss'

const Products = () => {

    const dispatch = useAppDispatch()
    const { activeProductsCategory } = useAppSelector( state => state.products)
    const productsList  = useAppSelector(state => state.products.productsList)

    const { Panel } = Collapse;


    useEffect(()=>{
        dispatch(fetchProducts(ProductsData.data.categories));
    }, [dispatch])


    const modalClasses = cn('products-modal', activeProductsCategory)
    const  renderAllProduct = productsList.map( item => {
        const classes = cn('products-wrapper', item.category)
        return (
            <div key={nanoid()} className={classes}>
                <Collapse accordion>
                    <Panel showArrow={false} header={<div className={'products-header'}>{item.label}<AiOutlineDown/></div>}  key={nanoid()}>
                        <Row justify={"space-around"} gutter={[10, 10]}>
                            {item.dataByCategory.map( productFromData => {
                                return <Col key={nanoid()}> <Product  productName={productFromData.name} category={item.category} icon={productFromData.icon}/> </Col>
                            })}
                        </Row>
                    </Panel>
                </Collapse>
            </div>
        )
    })

    return(
        <>
            <div data-testid='products' className='page-wrapper page-wrapper__products'>
                {renderAllProduct}
            </div>
            <Modal modalClasses={modalClasses} >
                <ProductModal/>
            </Modal>
        </>
    )
}

export default Products