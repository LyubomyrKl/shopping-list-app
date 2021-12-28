import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { store } from "../store/store";
import { Provider } from 'react-redux'
import App from "../App";


describe('App', () => {
    test("Renders App Compontents", () => {
        render(
               <Provider store={store}>
                    <App/>   
               </Provider>
               );
        expect(screen.getByText("Shopping list")).toBeInTheDocument()
    })
});

