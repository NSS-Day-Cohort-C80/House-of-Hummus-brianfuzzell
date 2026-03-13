import { setVegetableChoice } from "./transientState.js"

// Create change handler func
const handleVegetableSelection = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        setVegetableChoice(parseInt(changeEvent.target.value))
    }
}

export const veggiesOptions = async () => {
    // Fetch entrees from API
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    // console.log(vegetables)

    // Add an event listener
    document.addEventListener("change", handleVegetableSelection)

    let optionsHTML = ""

    const arrayOfOptions = vegetables.map(
        (vegetable) => {
            return `<div>
                <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
            </div>`
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")

    // console.log(optionsHTML)

    return optionsHTML
}
