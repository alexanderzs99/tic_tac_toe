import React from "react";
import { useEffect, useState } from "react";
import Cell from "./Cell";
import "./Board.css";

var tempList = [];
var isXTurn = true;
let justStarted = true;
//let numXWins = 0;
//let winner = "No winner yet";

for (var i = 0; i < 9; i++) {
    tempList.push({id: i, value: null, locked: false});
}

const Board = () => {
    const [cells, setCells] = useState(tempList);
    const [winner, setWinner] = useState("");
    //const [xWins, setXWins] = useState(numXWins);
    useEffect(() => {
        // Setting the winner in case of a win
        if (checkWinner()) {
            //setWinner("Hello");
            //setXWins(numXWins++);
        } 
    })

    const generateBoard = () => {
        setCells(tempList);
        justStarted = true;
        isXTurn = true;
        setWinner("");
    }

    const checkRows = () => {
        //row1
        if((cells[0].value === cells[1].value && cells[0].value === cells[2].value))
        {
            setWinner(cells[0].value);
            justStarted = true;
            return true;
        }
        //row2
        if((cells[3].value === cells[4].value && cells[3].value === cells[5].value))
        {
            setWinner(cells[3].value);
            justStarted = true;
            return true;
        }
        //row3
        if((cells[6].value === cells[7].value && cells[6].value === cells[8].value))
        {
            setWinner(cells[6].value);
            justStarted = true;
            return true;
        }
    }

    const checkCols = () => {
        //col1
        if((cells[0].value === cells[3].value && cells[0].value === cells[6].value))
        {
            setWinner(cells[0].value);
            justStarted = true;
            return true;
        }
        //col2
        if((cells[1].value === cells[4].value && cells[1].value === cells[7].value))
        {
            setWinner(cells[6].value);
            justStarted = true;
            return true;
        }
        //col3
        if((cells[2].value === cells[5].value && cells[2].value === cells[8].value))
        {
            setWinner(cells[2].value);
            justStarted = true;
            return true;
        }
    }

    const checkDiags = () => {
        //diag1
        if((cells[0].value === cells[4].value && cells[0].value === cells[8].value))
        {
            setWinner(cells[0].value);
            justStarted = true;
            return true;
        }
        //diag2
        if((cells[2].value === cells[4].value && cells[2].value === cells[6].value))
        {
            setWinner(cells[2].value);
            justStarted = true;
            return true;
        }
    }

    const checkWinner = () => {
        if (justStarted)
        { 
            return false;
        }

        else if(checkRows() || checkCols() || checkDiags())
        {
            return true;
        }
    }
    
    const cellPressed = (i) => {
        let cellsCopy = [...cells];
        let cellCopy = {...cells[i]};
        if (isXTurn)
        {
            cellCopy.value = 'X';
        }
        if (!isXTurn)
        {
            cellCopy.value = 'O';
        }
        
        cellCopy.locked = true;
        cellsCopy[i] = cellCopy;
        
        setCells(cellsCopy);

        checkWinner();
        isXTurn = !isXTurn;
        justStarted = false;

        }
    

    return (
        <div className="home">
            <div className="board">
                {cells.map((cell, i) => {
                    return (
                        <Cell 
                            onClick={() => cellPressed(cell.id)}
                            key={cell.id} 
                            id= {cell.id} 
                            value={cell.value}
                            locked={cell.locked}
                        >
                        </Cell>
                    );
                })}
            </div>
            <div>
                <div>
                    Winner is: {winner}
                </div>
                {/* <div>Number of X wins: {xWins}</div> */}
                <div onClick={() => generateBoard()}>
                    <button>New Game</button>
                </div>
            </div>
        </div>
    );
};

export default Board;
