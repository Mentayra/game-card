import { confetti } from "./confeti.js";
import { createGameCard } from "./gameCard.js";
import { createGameMenu } from "./gameMenu.js";
import { createIconsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) => {
    let firstcard = null;
    let secondcard = null;
    let clickable = true;
    
    const gameSection = document.querySelector(".game-selection_container");
    const gameTable = document.createElement("div");
    const cardsIcons = createIconsArray(difficult);
    const dublicatedCardsIcons = dublicateArray(cardsIcons);
    const restartBtn =document.createElement("button");

    gameSection.innerHTML = "";
    restartBtn.textContent = "Начать заново";
    gameTable.classList.add("game-table");
    restartBtn.classList.add("restart-btn");

    shuffle(dublicatedCardsIcons);
    
    dublicatedCardsIcons.forEach(icon => gameTable.append(createGameCard("question-circle", icon)))

    gameSection.append(gameTable, restartBtn)

    const cards = document.querySelectorAll(".game-card")

    restartBtn.addEventListener("click",  createGameMenu)
    

    cards.forEach((card, index) => card.addEventListener("click", () => {
        if (clickable == true && !card.classList.contains("succesfully")) {
            card.classList.add("flip")

            if (firstcard == null) {
                firstcard = index
            }else{
                if (index != firstcard) {
                    secondcard = index
                    clickable = false
                }
            }
            if (firstcard != null && secondcard != null && firstcard != secondcard) {
                if (
                    cards[firstcard].firstElementChild.className ===
                    cards[secondcard].firstElementChild.className 
                ) {
                    setTimeout(() => {
                    cards[firstcard].classList.add("succesfully")
                    cards[secondcard].classList.add("succesfully") 
                
                firstcard = null
                secondcard = null
                clickable = true 
                    }, 500);
                }   else{
                    setTimeout(() => {
                        cards[firstcard].classList.remove("flip")
                        cards[secondcard].classList.remove("flip") 
                    
                    firstcard = null
                    secondcard = null
                    clickable = true 
                        }, 500);
                }
            }

            if (Array.from(cards).every(card => card.className.includes("flip"))) {
                document.querySelector(".confeti").innerHTML = confetti
            }
        }
    }))
}