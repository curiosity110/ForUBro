import React from "react";
import "./styles.css";

const Cell = (props) =>{
    return (
    <div className={props.active?"active":"test"}></div>
    );
}

export default Cell;
/*style={{backgroundColor:`${props.colour}`}}*/
/**/