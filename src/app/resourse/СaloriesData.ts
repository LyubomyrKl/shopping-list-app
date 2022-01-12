import {nanoid} from "@reduxjs/toolkit";
import { ICaloriesData } from "../models/ICaloriesData";


const caloriesData = {
    data: {
        days: [
            {
                key: nanoid(),
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: nanoid(),
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
        ],

        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
        ]
    }
}


export default caloriesData