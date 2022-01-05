import { ProductsData } from "../resourse/ProductsData";

export interface IProductsInitialState{
    productsList : typeof ProductsData,
    activePopup: boolean,
    activeProductsWindow: string,
    activeProductsLabel: string,
}