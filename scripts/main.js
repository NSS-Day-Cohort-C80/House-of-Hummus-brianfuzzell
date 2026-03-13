import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    // Assign imported functions to HTML variables
    // const foodTruckHTML = FoodTruck()

    // Create composedHTML
    const composedHTML = `
        <h1>Laura Kathryn's House of Hummus</h1>

        <article>
            <section>
                <h2>Base Dish</h2>

            </section>

            <section>
                <h2>Vegetable</h2>
                
            </section>

            <section>
                <h2>Sides</h2>
                
            </section>
        </article>

        <article>
        
        </article>

        <article>
        
        </article>
    `
    
    mainContainer.innerHTML = FoodTruck()
}

// Add an event listener for our new custom event

renderAllHTML()
