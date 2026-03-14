import { setSideChoice } from "./transientState.js"

// Create change handler func
const handleSideSelection = (changeEvent) => {
    if (changeEvent.target.name === "side") {
       setSideChoice(parseInt(changeEvent.target.value)) 
    }
}

export const sidesOptions = async () => {
    // Fetch sides from API
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    // console.log(sides)

    // Add an event listener
    document.addEventListener("change", handleSideSelection)

    let optionsHTML = ""

    const arrayOfOptions = sides.map(
        (side) => {
            return `<div>
                <input type="radio" name="side" value="${side.id}" /> ${side.title}
            </div>`
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")

    // console.log(optionsHTML)

    return optionsHTML
}

