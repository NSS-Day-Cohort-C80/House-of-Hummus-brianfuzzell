import { Sales } from "./Sales.js"
import { entreesOptions } from "./Entrees.js"
import { veggiesOptions } from "./Vegetables.js"
import { sidesOptions } from "./SideDishes.js"

const entreesHTML = entreesOptions()
const vegetablesHTML = veggiesOptions()
const sidesHTML = sidesOptions()

// Will need an async func in this module because the funcs Food Truck imports are async

export const FoodTruck = () => {
    const salesHTML = Sales() // Investigate this

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <section>
                <h2>Base Dish</h2>
                ${entreesHTML}
            </section>

            <section>
                <h2>Vegetable</h2>
                ${vegetablesHTML}
            </section>

            <section>
                <h2>Sides</h2>
                ${sidesHTML}
            </section>
        </article>
        
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
