export const shuffle = (array) => {
    let curentIndex = array.length, randomIndex;

    while (curentIndex != 0) {
        randomIndex = Math.floor(Math.random() * curentIndex);
        curentIndex--;

        [array[curentIndex], array[randomIndex]] = [
        array[randomIndex], array[curentIndex]]
    }

    return array
}

export const dublicateArray = (array) => array.reduce((res,current) => res.concat([current,current]), []);

export const createIconsArray = (initialCount) =>{
const cardsIcons = [
    "compass",
    "cloud",
    "play",
    "bolt",
    "stop",
    "cogs",
    "atom",
    "basketball-ball"
];

switch (initialCount) {
    case 10:
        return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
            case 14:
                return cardsIcons.slice(0, 7);
                case 16:
                    return cardsIcons;
    default:
        break;
}

}