import { placeOrder } from "./transientState.js"

// click event handler
const handlePurchaseSubmission = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        console.log("Purchase Combo button clicked")
        placeOrder()
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handlePurchaseSubmission)

    return `<button id="purchase">Purchase Combo</button>`
}