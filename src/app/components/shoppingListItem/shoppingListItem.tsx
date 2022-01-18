import cn from "classnames";
import * as AiIcons from "react-icons/ai";
import React from "react";
import { newShoppingListItem } from "../../models/InewShoppinngListItem";

interface ShoppingListItemProps {
    product: newShoppingListItem,
    onDelete: (id: string) => void,
    onEdit: (id: string) => void
}

const ShoppingListItem = ({product, onDelete, onEdit}: ShoppingListItemProps) => {

    const listItemClass = cn('shipping-list-item', product.category)

    return(
        <div className={listItemClass} key={product.id}>
            <div className="info-item">
                <img className={'product-svg products-modal-svg'}  src={`assets/products/${product.icon}`}/>
                <span className={"shopping-list-item_descr count"}> {product.count} </span>
                <span className={"shopping-list-item_descr measure"}> {product.measure} </span>
            </div>
            <div className="item-tools">
                <AiIcons.AiOutlineEdit className={'edit'} onClick={()=>{onEdit(product.id)}}/>
                <AiIcons.AiOutlineClose className={'delete'} onClick={()=>{onDelete(product.id)}}/>
            </div>
        </div>
    )
}

export default ShoppingListItem
