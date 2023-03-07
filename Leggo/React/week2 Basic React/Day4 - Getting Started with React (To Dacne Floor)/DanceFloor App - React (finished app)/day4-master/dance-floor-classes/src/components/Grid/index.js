import React from "react";
import "./styles.css";
import Cell from "../Cell";


class Grid extends React.Component {
    constructor(){        
        super();
        this.state =  {
            colours: []
        }        
    }   

    createRandomColorValue = ()=>{
        return Math.floor(Math.random()*256);
    }

    createRandomRGBValue = () =>{
        const red = this.createRandomColorValue();
        const green = this.createRandomColorValue();
        const blue = this.createRandomColorValue();
        return `rgb(${red},${green},${blue})`
    }

    createCells = () => {
        const newColours = [];
        for(let i=0;i<25;i++){
            newColours.push(this.createRandomRGBValue());
        }
        this.setState({colours: newColours})  
            
    }

    startDanceFloor = () =>{
        setInterval(this.createCells,200);
        
    }

    componentDidMount = () => {
        this.startDanceFloor();
        
    }

    render(){      
        return(           
            <main>
                {this.state.colours.map((colour,index) => <Cell colour={colour} key={index}/>)}
            </main>
        );
    }
}

export default Grid;
