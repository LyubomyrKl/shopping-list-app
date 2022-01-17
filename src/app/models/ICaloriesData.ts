export interface ICaloriesProduct {
    key: string,
    product: string,
    value: number,
    kcal: number
}

export interface ICaloriesDay {
    id: string
    date: string
    products: ICaloriesProduct[];
}

export interface ICaloriesData {
    data: {
        days: Array<ICaloriesDay>,
        columns: Array<Record<string, string>>
    }
}
