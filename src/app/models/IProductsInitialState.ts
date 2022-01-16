import {ICategory} from "./IProductData";

export interface IProductsInitialState{
    productsList : Array<ICategory>,
    activeProductsWindow: string,
    activeProductsCategory: string,
}