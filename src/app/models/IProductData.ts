export interface IProduct {
    name: string;
    icon: string;
}

export interface ICategory {
    id: number,
    category: string,
    label: string,
    metrics: Array<string>,
    dataByCategory: IProduct[];
}

export interface IStyleCategory {
    categoryId: number;
    style: {
        bgColor: string;
    }
}

export interface IProductsData {
    data: {
        categories: ICategory[];
        styleByCategoryId: IStyleCategory[];
    };
};