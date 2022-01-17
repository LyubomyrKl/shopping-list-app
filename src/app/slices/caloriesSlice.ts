import { createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import { ICaloriesInitialState } from "../models/ICaloriesInitialState";
import { ICaloriesProduct , ICaloriesDay} from "../models/ICaloriesData";



const initialState : ICaloriesInitialState = {
    days: [],
    activeDay: 0,
    activeModal: false
}

const caloriesSlice = createSlice({
    name: 'calories',
    initialState,
    reducers: {
        fetchCaloriesData: (state:Draft<ICaloriesInitialState>, action:PayloadAction<Array<ICaloriesDay>>) => {
            state.days = action.payload
        },
        addProductToDay: ( state, action:PayloadAction<ICaloriesProduct>)=>{
            state.days[state.activeDay].products.push(action.payload)
        },
        setActiveDay: (state, action:PayloadAction<number>) => {
            state.activeDay = action.payload
        },
        addDay: (state, action) => {
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