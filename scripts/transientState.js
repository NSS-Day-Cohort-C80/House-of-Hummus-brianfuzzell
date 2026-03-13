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

// TODO: create and export a placeOrder func