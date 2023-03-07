import React from "react";
import "./styles.css";
import Cell from "../Cell";


class Grid extends React.Component {
    constructor(){        
        super();
        this.state =  {
            cells: [[0,0],
                    [0,1],
                    [0,2],
                    [0,3],
                    [0,4],
                   
                    [1,0],
                    [1,1],
                    [1,2],
                    [1,3],
                    [1,4],
                  
                    [2,0],
                    [2,1],
                    [2,2],
                    [2,3],
                    [2,4],
                    
                    [3,0],
                    [3,1],
                    [3,2],
                    [3,3],
                    [3,4],
                  
                    [4,0],
                    [4,1],
                    [4,2],
                    [4,3],
                    [4,4],],

            active: [0,0],
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
        setInterval(this.createCells,500);
    } 

    moveCell = event => {
        let newActiveCell,newRow, newCol;;
        const currRow = this.state.active[0];
        const currCol = this.state.active[1];
        switch(event.keyCode){            
            case 37:
                newCol = currCol-1<0?4:currCol-1;
                newActiveCell = [currRow,newCol];
                break;
            case 38:
                newRow = currRow-1<0?4:currRow-1;
                newActiveCell = [newRow,currCol];
                break;
            case 39:
                newCol = currCol+1>4?0:currCol+1;
                newActiveCell = [currRow,newCol];
                break;
            case 40:
                newRow = currRow+1>4?0:currRow+1;
                newActiveCell = [newRow,currCol];
                break;
            default:
                newActiveCell = [currRow,currCol];
                break;
        }
        //console.log(event.keyCode);//37 = L, 38 = U, 39 = R, 40 = D        
        this.setState({active: newActiveCell});
        
    }

    componentDidMount(){
        this.startDanceFloor();
    }

    render(){        
        return(           
            <main 
            role="button"
            tabIndex="0"
            onKeyDown={this.moveCell}    
            >
                {this.state.cells.map((cell,index) => <Cell active={cell[0]===this.state.active[0]&&cell[1]===this.state.active[1]?true:false} key={index}/>)}
            </main>
        );
    }
}

export default Grid;
