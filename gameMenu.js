import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement("h2");
    const GameSection = document.querySelector(".game-selection_container");

    GameSection.InnerHTML = '';
    // title.textContent = "Выбор сложности"
    // title.classList.add("game-menu_title")
    document.querySelector(".confeti").innerHTML="";

    const createDifficultButton = (difficult) => {
        const button = document.createElement("button");

        button.classList.add("game-menu_difficult-btn");
        button.textContent = `${difficult} карт`;

        button.addEventListener('click', () => startGame(difficult))

        return button;
    }

    GameSection.append(
        title,
        createDifficultButton(10),
        createDifficultButton(12),
        createDifficultButton(14),
        createDifficultButton(16),
    )
}