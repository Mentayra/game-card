export const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement("div")
    card.classList.add("game-card")

    const notflippedCardI = document.createElement("i")
    const flippedCardI = document.createElement("i")

    notflippedCardI.classList.add("fa", `fa-${defaultIcon}`)
    flippedCardI.classList.add("fa", `fa-${flippedCardIcon}`)

    card.append(flippedCardI, notflippedCardI)

    return card;
}