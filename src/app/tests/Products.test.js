import { render, screen } from "react-dom"
import Products from '../pages/Products/Products'

describe("Products", ()=>{
    test('Page render', ()=>{
        render(<Products/>)
    })
})