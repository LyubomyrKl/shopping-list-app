import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductsInitialState} from "../models/IProductsInitialState";

const initialState:IProductsInitialState = {
    productsList: {},
    activePopup: false,
    activeProductsWindow: 'question-mark.svg',
    activeProductsLabel: 'Different'
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        fetchProducts: ( state, action:PayloadAction<any>  ) => {
            state.productsList = action.payload;
        },
        openActivePopup: (state, action:PayloadAction<any>)=>{
            state.activePopup = true;
            state.activeProductsWindow = action.payload.svg
            state.activeProductsLabel = action.payload.label
        },
        closeActivePopup: (state)=>{
            state.activePopup = !state.activePopup
        },
    }
})

export default productsSlice.reducer;

export const {
    fetchProducts,
    closeActivePopup,
    openActivePopup
} = productsSlice.actions