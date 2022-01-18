import {createSlice, Draft} from "@reduxjs/toolkit";

interface IInitialModalState{
    activePopup: boolean
}

const initialModalState:IInitialModalState = {
    activePopup: false
}

const modalSlice = createSlice({
    name:'modal',
    initialState: initialModalState,
    reducers: {
        toggleActiveModal: (state:Draft<IInitialModalState>)=>{
            state.activePopup = !state.activePopup
        }
    }
})

export default modalSlice.reducer

export const {
    toggleActiveModal,
} = modalSlice.actions