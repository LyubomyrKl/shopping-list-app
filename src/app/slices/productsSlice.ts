import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsInitialState } from "../models/IProductsInitialState";

const initialState: IProductsInitialState = {
    productsList: [],
    activeProductsWindow: 'question-mark.svg',
    activeProductsCategory: 'Different'
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        fetchProducts: ( state, action:PayloadAction<any>  ) => {
            state.productsList = action.payload;
        },
        renderProductModal: (state, action:PayloadAction<any>)=>{
            state.activeProductsWindow = action.payload.icon
            state.activeProductsCategory = action.payload.category
        },
    }
})

export default productsSlice.reducer;
export const {
    fetchProducts,
    renderProductModal
} = productsSlice.actions