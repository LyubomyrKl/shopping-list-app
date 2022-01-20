import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../models/IProductData";

interface IProductsInitialState{
    productsList : ICategory[],
    activeProductsWindow: string,
    activeProductsCategory: string,
}

const initialState: IProductsInitialState = {
    productsList: [],
    activeProductsWindow: 'question-mark.svg',
    activeProductsCategory: 'Different'
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        fetchProducts: ( state:Draft<IProductsInitialState>, action:PayloadAction<ICategory[]>  ) => {
            state.productsList = action.payload;
        },
        renderProductModal: (state:Draft<IProductsInitialState>, action:PayloadAction<{icon:string, category:string}>)=>{
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