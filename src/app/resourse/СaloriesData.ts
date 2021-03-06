import {nanoid} from "@reduxjs/toolkit";
import {ICaloriesData} from "../models/ICaloriesData";



const caloriesData: ICaloriesData = {
    "data": {
        "days": [
            {
                "id": '1',
                "date": '30.01.2021',
                "products": [
                    {
                        'key': nanoid(),
                        "product": 'John Brown',
                        "value": 32,
                        "kcal": 324
                    },
                    {
                        'key': nanoid(),
                        "product": 'John Brown',
                        "value": 32,
                        "kcal": 324
                    },
                    {
                        'key': nanoid(),
                        "product": 'John Brown',
                        "value": 32,
                        "kcal": 324
                    },
                    {
                        'key': nanoid(),
                        "product": 'John Brown',
                        "value": 32,
                        "kcal": 324
                    },

                ]
            },
            {
                "id": '2',
                "date": '31.01.2021',
                "products": [
                    {
                        'key': nanoid(),
                        "product": 'John Brown',
                        "value": 32,
                        "kcal": 324
                    },
                    {
                        'key': nanoid(),
                        "product": 'John Brown',
                        "value": 32,
                        "kcal": 324
                    },
                ]
            }
        ],

        "columns": [
            {
                "title": 'Product',
                "dataIndex": 'product',
            },
            {
                "title": 'Value',
                "dataIndex": 'value',
            },
            {
                "title": 'KCAL',
                "dataIndex": 'kcal',
            },
        ]
    }
}


export default caloriesData