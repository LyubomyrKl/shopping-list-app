import {createSlice, Draft, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {newShoppingListItem} from "../models/InewShoppinngListItem";
interface shoppingListInitialState{
    list: Array<newShoppingListItem>;
}

const initialState: shoppingListInitialState = {
    list: [
        {
            id: nanoid(),
            count: 1,
            measure: 'Kg',
            icon: 'chicken-breast.svg',
            category: 'meat'
        },

        {
            id: nanoid(),
            count: 1,
            measure: 'Gram',
            icon: 'milk.svg',
            category: "dairy"
        },
        {
            id: nanoid(),
            count: 1,
            measure: 'Quantity',
            icon: "bananas.svg",
            category: "fruit"
        },
    ],
}

const shoppingListSlice = createSlice({
    name:"shoppingList",
    initialState,
    reducers: {
        addListItem: (state:Draft<any>, action )=>{
          const existedObj = state.list.find( (obj: { icon: any; }) => obj.icon == action.payload.icon)git
            existedObj ? existedObj.count += action.payload.count : state.list.push(action.payload)
        },
        deleteShoppingListItem: ( state ,action:PayloadAction<any>) => {
            //@ts-ignore
            state.list = state.list.filter(item => item.id !== action.payload);
        }
    }
})

export default shoppingListSlice.reducer;
export const {
    addListItem,
    deleteShoppingListItem
} = shoppingListSlice.actions