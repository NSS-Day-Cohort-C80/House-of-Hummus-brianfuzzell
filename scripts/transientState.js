const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

// Create and export setters
export const setEntreeChoice = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    // console.log(`Selected entree ID is ${transientState.entreeId}`)
}

export const setVegetableChoice = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    // console.log(`Selected entree ID is ${transientState.vegetableId}`)
}

export const setSideChoice = (chosenSide) => {
    transientState.sideId = chosenSide
    // console.log(`Selected entree ID is ${transientState.sideId}`)
}

// Create and export a placeOrder func to send orders data to API
export const placeOrder = async () => {
    // Add keys needed for POST
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send transient state data to API
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    const newPurchase = await response.json() // Wait for db to finish updating before dispatching the custom event

    // Dispatch a custom event when the submission is complete 
    const stateChanged = new CustomEvent("newPurchaseSubmitted")
    console.log("Dispatching event...")
    document.dispatchEvent(stateChanged)
}