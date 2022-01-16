import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import './ShoppingList.scss'
import { deleteShoppingListItem } from "../../slices/shoppnigListSlice";
import ShoppingListItem from "../../components/shoppingListItem/shoppingListItem";

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
        return <ShoppingListItem product={item} onEdit={onEdit} onDelete={onDelete}/>
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