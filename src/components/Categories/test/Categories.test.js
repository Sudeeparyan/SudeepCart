import { screen, render,fireEvent } from "@testing-library/react"
import Categories from "../Categories"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import { Navbar } from "react-bootstrap"

describe('Categories',()=>{
    test ('bestSellers renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('bestSellers'))
        expect(window.location.pathname).toEqual('/bestSellers')
    })
    test("Shopping Button on pressing tab four times", async () => {
        render(
          <BrowserRouter>
            <Navbar/>
          </BrowserRouter>
        );
        await userEvent.tab();
        fireEvent.click( screen.getByTestId('home'));
        expect(window.location.pathname).toBe("/");
      });
    test ('computerAccresseries renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('computerAccresseries'))
        expect(window.location.pathname).toEqual('/computerAccresseries')
    })
    test ('Books renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        fireEvent.click(screen.getByTestId('Books'))
        expect(window.location.pathname).toEqual('/Books')
    })   
    test ('groceries renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('groceries'))
        expect(window.location.pathname).toEqual('/groceries')
    })   
    test ('Mobiles renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Mobiles'))
        expect(window.location.pathname).toEqual('/Mobiles')
    })   
    test ('Fashion renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Fashion'))
        expect(window.location.pathname).toEqual('/Fashion')
    })   
    test ('Electronics renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Electronics'))
        expect(window.location.pathname).toEqual('/Electronics')
    })         
    test ('RoboElements renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('RoboElements'))
        expect(window.location.pathname).toEqual('/RoboElements')
    })   
    test ('Games renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Games'))
        expect(window.location.pathname).toEqual('/Games')
    })   
    test ('Subscrption renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('Subscrption'))
        expect(window.location.pathname).toEqual('/Subscrption')
    })   
    test ('CustomerSerice renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('CustomerSerice'))
        expect(window.location.pathname).toEqual('/CustomerSerice')
    })   
    test ('More renders',()=>{
        render(
        <BrowserRouter>
            <Categories/>
        </BrowserRouter>)
        // expect(screen.getByTestId('bestSellers'))
        fireEvent.click(screen.getByTestId('More'))
        expect(window.location.pathname).toEqual('/More')
    })   

})