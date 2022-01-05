import React from "react";
import * as AiIcons from "react-icons/ai";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import './ShoppingList.scss'
import cn from "classnames";
import {deleteShoppingListItem} from "../../slices/shoppnigListSlice";


const ShoppingList = () => {
    const dispatch = useAppDispatch();
    const shoppingList = useAppSelector( state => state.shoppingList.list)

    const onEdit = (id:string) => {
        console.log(id)
    }

    const onDelete = (id:string) => {
        dispatch(deleteShoppingListItem(id));
    }



    const elements = shoppingList.map((item:any) => {

        const listItemClass = cn('shipping-list-item', {
            "meat":  item.label === "Meat",
            "dairy": item.label  === "Dairy Products",
            "vegetable": item.label === "Vegetables",
            "fruit": item.label  === "Fruits",
            "sweets": item.label  === "Sweets",
            "fastfood": item.label  === "Fastfood",
            "bakery": item.label  === "Bakery",
            "different": item.label  === "Different",
        })

        return(
            <div className={listItemClass} key={item.id}>
                <div className="info-item">
                  <img className={'product-svg products-modal-svg'}  src={`assets/products/${item.icon}`}/>
                  <span className={"shopping-list-item_descr count"}> {item.count} </span>
                  <span className={"shopping-list-item_descr measure"}> {item.measure} </span>
                </div>
                <div className="item-tools">
                    <AiIcons.AiOutlineEdit className={'edit'} onClick={()=>{onEdit(item.id)}}/>
                    <AiIcons.AiOutlineClose className={'delete'} onClick={()=>{onDelete(item.id)}}/>
                </div>
            </div>
        )
    })

    return(
        <div className='page-wrapper shopping-list-wrapper'>
            <div className={'shopping-list'}>
                {elements}
            </div>
        </div>
    )
}

export default ShoppingList