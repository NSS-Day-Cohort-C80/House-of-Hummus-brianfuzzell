// Import {} from transientState.js

// Create change handler func

export const Sides = async () => {
    // Fetch sides from API
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    // console.log(sides)

    // Add an event listener

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

    return html
}

