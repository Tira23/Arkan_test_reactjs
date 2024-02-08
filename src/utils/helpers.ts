// получаем рандомно число для выборки городов
import {ICities} from "../interface";

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

// меняет значение isChose на выбранном городе
export function toggleChoseCity(city: ICities) {
    city.isChose = !city.isChose
}

// функция, которая указывает какие города необходимо перенести
export function toggleIsLeft(city: ICities) {
    if (city.isChose) {
        city.isLeft = !city.isLeft
        city.isChose = false
        return true
    }
    return false
}
