import { Sales } from "./Sales.js"
import { entreesOptions } from "./Entrees.js"
import { veggiesOptions } from "./Vegetables.js"
import { sidesOptions } from "./SideDishes.js"
import { submissionButton } from "./submissionButton.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreesHTML = await entreesOptions()
    const vegetablesHTML = await veggiesOptions()
    const sidesHTML = await sidesOptions()
    const buttonHTML = submissionButton()

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
            ${buttonHTML}
        </article>

        <article class="customerOrders">
            ${salesHTML}
        </article>

    `
}
