import React from "react";

interface IProps {
    classname: string,
    imgSrc: string,
    onClick?: () => void
}

export default function Arrow({classname, imgSrc, onClick}: IProps) {

    return (
        <div className={classname} onClick={onClick}>
            <img src={imgSrc} alt="arrow"/>
        </div>
    );
}
