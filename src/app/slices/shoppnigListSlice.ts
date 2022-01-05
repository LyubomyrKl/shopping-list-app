import {createSlice, Draft, nanoid, PayloadAction} from "@reduxjs/toolkit";

interface shoppingListInitialState{
    list: Array<object>;
}

const initialState: shoppingListInitialState = {
    list: [
        {
            id: nanoid(),
            count: '1',
            measure: 'Kg',
            icon: 'chicken-breast.svg',
            label: 'Meat'
        },
        {
            id: nanoid(),
            count: '23',
            measure: 'Gram',
            icon: 'milk.svg',
            label: "Dairy Products"
        },
        {
            id: nanoid(),
            count: '3',
            measure: 'Quantity',
            icon: "bananas.svg",
            label: "Fruits"
        },
    ],
}

const shoppingListSlice = createSlice({
    name:"shoppingList",
    initialState,
    reducers: {
        addListItem: (state:Draft<any>, {payload}:{payload:object} )=>{
            state.list.push(payload)
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