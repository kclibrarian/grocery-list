import React from 'react';
import "./item.css";

function item(props) {

    return <div className="item-name">
        <h3> {props.item.name} </h3>
        <h3> {props.item.calorie} </h3>

    </div>
}

export default item;