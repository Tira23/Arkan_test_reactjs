import React, {useEffect, useState} from 'react';
import './App.css';
import ArrowBlock from "./components/arrowBlock/ArrowsBlock";
import BlockCities from "./components/blockCities/BlockCities";
import {ICities} from "./interface";
import {distributeElementsToArrays, getAllCities, moveLiA2B} from "./utils/cities";

const allCitiesInitState = getAllCities()

function App() {
    const [leftCities, setLeftCities] = useState<ICities[]>([])
    const [rightCities, setRightCities] = useState<ICities[]>([])
    const _moveLiToRight = () => {
        const [_right, _left] = moveLiA2B(leftCities, rightCities)
        setRightCities(_right)
        setLeftCities(_left)
    }
    const _moveLiToLeft = () => {
        const [_right, _left] = moveLiA2B(rightCities, leftCities)
        setRightCities(_right)
        setLeftCities(_left)
    }
    const _moveLiAllToRight = () => {
        const [_right, _left] = moveLiA2B(rightCities, leftCities, {all: true, direction: "toRight"})
        setLeftCities(_left)
        setRightCities(_right)
    }
    const _moveLiAllToLeft = () => {
        const [_right, _left] = moveLiA2B(rightCities, leftCities, {all: true, direction: "toLeft"})
        setLeftCities(_left)
        setRightCities(_right)
    }
    useEffect(() => {
        const [left, right] = distributeElementsToArrays(allCitiesInitState)
        setLeftCities(left)
        setRightCities(right)
    }, []);

    return (
        <div className="section">
            <div className="wrapper">
                <BlockCities arrayCities={leftCities} classname="left block"/>
                <ArrowBlock onClickTR={_moveLiToRight} onClickTL={_moveLiToLeft} onClickAll2L={_moveLiAllToRight}
                            onClickAll2R={_moveLiAllToLeft}/>
                <BlockCities arrayCities={rightCities} classname="right block"/>
            </div>
        </div>
    );
}

export default App;
