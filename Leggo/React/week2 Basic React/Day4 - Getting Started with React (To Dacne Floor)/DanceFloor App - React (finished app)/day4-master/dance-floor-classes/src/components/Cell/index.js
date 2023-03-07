import "./styles.css";

const Cell = (props) =>{
    //return (<div className="cell" style={{backgroundColor:`${props.colour}`}}></div>);
    return (<div className="cell" style={{background:`radial-gradient(circle, rgba(255, 255, 150), ${props.colour}`}}></div>);
}

export default Cell;
