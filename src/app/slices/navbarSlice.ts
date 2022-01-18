import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

interface navInitialState{
    activePage: string,
    menuActiveStatus: boolean
}

const initialState : navInitialState = {
    activePage: 'Shopping list',
    menuActiveStatus: false,
}

const navbarSlice = createSlice({
    name:"navbar",
    initialState,
    reducers: {
        changeActiveStatus: (state:Draft<navInitialState>) => {
            state.menuActiveStatus = !state.menuActiveStatus
        },
        changeActivePage: (state:Draft<navInitialState>, action:PayloadAction<string>) => {
            state.activePage = action.payload
        },
    },
})

export default navbarSlice.reducer;

export const {
    changeActiveStatus,
    changeActivePage
} = navbarSlice.actions