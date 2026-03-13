import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    // Assign imported functions to HTML variables
    const foodTruckHTML = await FoodTruck() // make async too?
    
    mainContainer.innerHTML = foodTruckHTML
}

// Add an event listener for our new custom event

renderAllHTML()
