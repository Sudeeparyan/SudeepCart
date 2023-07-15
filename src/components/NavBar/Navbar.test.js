import { screen, render, fireEvent } from "@testing-library/react"
import NavBar from "./NavBar"
import { BrowserRouter } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import userEvent from "@testing-library/user-event"

describe('Navbar test functionality', ()=>{
    test('Navbar renders correctly',()=>{
        render(<NavBar/>)
    })
    test("Shopping Button on pressing tab four times", async () => {
        render(
          <BrowserRouter>
            <Navbar/>
          </BrowserRouter>
        );
        await userEvent.tab();
        fireEvent.click( screen.getByTestId('scart'));
        expect(window.location.pathname).toBe("/");
      });
})