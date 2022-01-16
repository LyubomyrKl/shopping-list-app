import {createSlice} from "@reduxjs/toolkit";

const initialModalState = {
    activePopup: false
}

const modalSlice = createSlice({
    name:'modal',
    initialState: initialModalState,
    reducers: {
        toggleActiveModal: (state)=>{
            state.activePopup = !state.activePopup
        }
    }
})

export default modalSlice.reducer

export const {
    toggleActiveModal,
} = modalSlice.actions