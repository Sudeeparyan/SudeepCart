import { screen, render } from "@testing-library/react"
import Chatbot from "./Chatbot"

describe('ChatBox test functionality',()=>{
    test('ChatBox renders correctly',()=>{
        render(<Chatbot />)

    } )
})