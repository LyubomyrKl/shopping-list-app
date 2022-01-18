 import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux'
import { store } from "../store/store";
import userEvent from "@testing-library/user-event";
import {
    BrowserRouter as Router,

} from "react-router-dom";
import App from "../App";
import NavBar from "../components/navBar/navBar";
import { act } from "react-dom/test-utils";


describe('Navbar', () => {

    test("Renders Navbar Compontents", () => {
        render(
        <Provider store={store}>
            <Router>
                <NavBar/>
            </Router>
        </Provider>
        );
        expect(screen.getByRole("list")).toBeInTheDocument()
    })

    test('should navigate to page', ()=>{
        render(
            <Provider store={store}>
                    <App/>
            </Provider>,
          )
        act(()=>{
           let goProducts = screen.getByText('Products');
           goProducts.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        })
        expect(screen.getByText(/bakery/i)).toBeInTheDocument()
    })

    test('should open and close menu', ()=>{
        render(
            <Provider store={store}>
                <Router>
                    <NavBar/>
                </Router>
             </Provider>
        )
        let menu = screen.getByRole('navigation');
        expect(menu).toHaveClass('nav-menu')
        screen.debug()
        let open = document.querySelector('#open-menu');
        userEvent.click(open)
        expect(menu).toHaveClass('active')
        screen.debug()
        // act(()=>{
        //     let close = document.querySelector('#close-menu');
        //     userEvent.click(close)
        //  })
        // expect(menu).not.toHaveClass('active')
    })

    t
});
