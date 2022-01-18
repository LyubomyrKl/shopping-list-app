import { createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import { ICaloriesProduct , ICaloriesDay} from "../models/ICaloriesData";


interface ICaloriesInitialState {
    days: Array<ICaloriesDay>,
    activeDay: number,
    activeModal: boolean
}

const initialState : ICaloriesInitialState = {
    days: [],
    activeDay: 0,
    activeModal: false
}

const caloriesSlice = createSlice({
    name: 'calories',
    initialState,
    reducers: {
        fetchCaloriesData: (state:Draft<ICaloriesInitialState>, action:PayloadAction<ICaloriesDay[]>) => {
            state.days = action.payload
        },
        addProductToDay: ( state:Draft<ICaloriesInitialState>, action:PayloadAction<ICaloriesProduct>)=>{
            state.days[state.activeDay].products.push(action.payload)
        },
        setActiveDay: (state:Draft<ICaloriesInitialState>, action:PayloadAction<number>) => {
            state.activeDay = action.payload
        },
        addDay: (state:Draft<ICaloriesInitialState>, action:PayloadAction<ICaloriesDay>) => {
            state.days.push(action.payload)
        }
    }
});



export default caloriesSlice.reducer;
export const  {
    fetchCaloriesData,
    addProductToDay,
    setActiveDay,
    addDay,
} = caloriesSlice.actions;