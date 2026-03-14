export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const purchases = await response.json()

    let html = `<div id="purchase">`

    const purchasesHTML = purchases.map(
        (purchase) => {
            const purchasePrice = purchase.entree.price + purchase.vegetable.price + purchase.side.price
            const formattedPrice = purchasePrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            return `
                <section class="purchase-submission-container">
                    <p>Receipt #${purchase.id} = ${formattedPrice}</p>
                </section>
            `
        }
    )

    html += purchasesHTML.join("")

    html += `</div>`

    return html
}

