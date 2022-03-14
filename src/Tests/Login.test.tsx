/* eslint-disable testing-library/no-render-in-setup */
import Login from "../containers/login"
import * as ReactDom from "react-dom"


describe("Login Component Test", () => {
    let container: HTMLDivElement
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container)
        ReactDom.render(<Login />, container)
    })

    afterEach(() => {
        document.removeChild(container)
        container.remove()
    })

    test("All elements rendors correctly", () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2)
    })
})