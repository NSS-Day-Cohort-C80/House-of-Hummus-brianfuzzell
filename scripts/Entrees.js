import { setEntreeChoice } from "./transientState.js"

// Create change handler func
const handleEntreeSelection = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntreeChoice(parseInt(changeEvent.target.value))
    }
}

export const entreesOptions = async () => {
    // Fetch entrees from API
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    // console.log(entrees)

    // Add an event listener
    document.addEventListener("change", handleEntreeSelection)

    let optionsHTML = ""

    const arrayOfOptions = entrees.map(
        (entree) => {
            return `<div>
                <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
            </div>`
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")

    // console.log(optionsHTML)

    return optionsHTML
}
    