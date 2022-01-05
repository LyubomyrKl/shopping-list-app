import {combineReducers, configureStore} from '@reduxjs/toolkit';
import navbar from '../slices/navbarSlice'
import products from '../slices/productsSlice'
import shoppingList from '../slices/shoppnigListSlice'



const rootReducer = combineReducers({
  navbar,
  products,
  shoppingList
})


export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== "production"
  })
} ;


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']