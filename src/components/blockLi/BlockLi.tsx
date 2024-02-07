import {ICities} from "../../interface";
import {useState} from "react";
import {toggleChoseCity} from "../../utils/cities";
import {Li} from "../../ui/li/Li";

interface IProps {
    city: ICities
}

export function BlockLi({city}: IProps) {
    const [chose, setChose] = useState(city.isChose)
    const _class = chose ? 'selectLine' : ''

    const clickedCity = () => {
        setChose(prev => !prev)
        toggleChoseCity(city)
    }
    return (
        <div
            className={_class}
            onClick={clickedCity}
        >
            <Li title={city.title}/>
        </div>
    )
}
