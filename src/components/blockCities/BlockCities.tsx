import React from "react";
import {ICities} from "../../interface";
import {BlockLi} from "../blockLi/BlockLi";

interface IProps {
    classname: string,
    arrayCities: ICities[]
}

export default function BlockCities({classname, arrayCities}: IProps) {

    return (
        <div className={classname}>
            <ul>
                {arrayCities && arrayCities.map((el)=><BlockLi key={el.id} city={el}/>)}
            </ul>
        </div>
    );
}
