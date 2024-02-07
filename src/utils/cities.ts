import {ICities} from "../interface";
import {cities} from "./constants";
import {getRandomInt} from "./helpers";

export function getAllCities() {
    // выбираю из всех городов 10
    const itemList: ICities[] = Array(10).fill(null).map(() => {
        // получаю длину массива городов
        const citiesArrayLength = cities.length
        // выбираю город наугад
        const randomCities = cities[getRandomInt(citiesArrayLength)]
        return {
            // присваиваю уникальный идентификатор
            id: getRandomInt(50000), // присваиваю имя городу
            title: randomCities, // выбирается случайно начальная позиция
            isLeft: Math.random() > .5, //  этот флаг отвечает выбран ли этот элемент
            isChose: false
        }
    })
    return itemList
}

// распределяю города по блокам
export function distributeElementsToArrays(allCities: ICities[]) {
    const leftBlockArray = allCities.filter(el => el.isLeft)
    const rightBlockArray = allCities.filter(el => !el.isLeft)
    return [leftBlockArray, rightBlockArray]
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
interface options{
    all: boolean,
    direction: 'toRight' | 'toLeft'
}
// перемещаю из одного массива в другой
export function moveLiA2B(citiesA: ICities[], citiesB: ICities[], obj?: options) {
    let _curCities = [...citiesB, ...citiesA]
    citiesA.forEach(toggleIsLeft)
    if (obj?.all) {
        switch (obj.direction) {
            case "toLeft":
                _curCities = _curCities.map(city => {
                    city.isChose = false
                    city.isLeft = true
                    return city
                })
                break;
            case "toRight":
                _curCities = _curCities.map(city => {
                    city.isChose = false
                    city.isLeft = false
                    return city
                })
                console.log(_curCities);
                break;
            default: break;
        }
    }
    const [leftBlockArray, rightBlockArray] = distributeElementsToArrays(_curCities)
    return [rightBlockArray, leftBlockArray]
}
