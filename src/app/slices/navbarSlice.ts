import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface navInitialState{
    activePage: string,
    menuActiveStatus: boolean
}
const initialState = {
    activePage: 'Shopping list',
    menuActiveStatus: false,
} as navInitialState

const navbarSlice = createSlice({
    name:"navbar",
    initialState,
    reducers: {
        changeActiveStatus: (state) => {
            state.menuActiveStatus = !state.menuActiveStatus
        },
        changeActivePage: (state, action:PayloadAction<string>) => {
            state.activePage = action.payload
        },
    },
})

export default navbarSlice.reducer;

export const {
    changeActiveStatus,
    changeActivePage
} = navbarSlice.actions