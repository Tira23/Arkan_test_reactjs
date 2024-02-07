import React from "react";
import Arrow from "../../ui/arrow/Arrow";
import arrow1 from "../../assets/1.png"
import arrow2 from "../../assets/2.png"

interface IProps {
    onClickTR: () => void
    onClickTL: () => void
    onClickAll2R: () => void
    onClickAll2L: () => void
}

export default function ArrowBlock({onClickTR,onClickTL,onClickAll2R, onClickAll2L}: IProps) {

    return (
        <div className="blockWithArrows">
            <Arrow
                classname="arrowToRight arrowCenter arrowButton"
                imgSrc={arrow1}
                onClick={onClickTR}
            />
            <Arrow
                classname="arrowToLeft arrowCenter arrowButton"
                imgSrc={arrow1}
                onClick={onClickTL}
            />
            <Arrow
                classname="doubleArrowToRight arrowCenter arrowButton"
                imgSrc={arrow2}
                onClick={onClickAll2R}

            />
            <Arrow
                classname="doubleArrowToLeft arrowCenter arrowButton"
                imgSrc={arrow2}
                onClick={onClickAll2L}

            />
        </div>
    );
}
