// Import {} from transientState.js

// Create change handler func

export const entreesOptions = async () => {
    // Fetch entrees from API
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    // console.log(entrees)

    // Add an event listener

    let optionsHTML = ""

    const divStringArray = entrees.map(
        (entree) => {
            return `<div>
                <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
            </div>`
        }
    )

    // console.log(divStringArray)

    optionsHTML += divStringArray.join("")

    // console.log(optionsHTML)

    return optionsHTML
}
    