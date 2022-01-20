import { render } from "react-dom"
import Products from "../pages/Products/Products"
import { setupStore } from "../store/store";
import {
    BrowserRouter as Router,
    Route

} from "react-router-dom";
import { Provider } from 'react-redux'


describe("Products", ()=>{
    test('Page render', ()=>{
        render(
            <Provider store={setupStore()}>
                <Router>
                   <Route element={<Products/>}/> 
                </Router>
            </Provider>
        );
    })
})