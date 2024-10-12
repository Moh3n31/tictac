import React, {useState} from "react";
import Square from './Square';

export default function Board () {

    const [squares, setSquares] = useState (new Array(9).fill({mark:null, id:'black'}));
    const [xIsNext, setXIsNext] = useState (true);
    const [theWinner, setTheWinner] = useState (null);
    
    if (!theWinner){
        winner();
    }

    function handleClick (i) {
        let changed = squares.slice(0);

        if(winner() || squares[i].mark)
            return null;
        
        if(xIsNext) {
            changed.splice(i,1,{mark:"X", id:'X'});
            setXIsNext(false);
        }
        else {
            changed.splice(i,1,{mark:"O", id:'O'});
            setXIsNext(true);
        }
        setSquares(changed);
    }

    function winner (){
        if (theWinner)
            return true;

        const winCondition = [
            // --
            [0,1,2],
            [3,4,5],
            [6,7,8],
            // |
            [0,3,6],
            [1,4,7],
            [2,5,8],
            // \
            [0,4,8],
            // /
            [2,4,6]
        ]

        winCondition.forEach(element => {
            const [a,b,c] = element;
            if ((squares[a].mark) && (squares[a].mark===squares[b].mark) && (squares[b].mark===squares[c].mark)) {
                if (squares[a].mark === "X")
                    setTheWinner('XBorder');
                else 
                    setTheWinner('OBorder');

                return true;
            }
        });
        return false;
    }

    return (
        <div className="board" id={theWinner}>
            <Square 
                onSquareClick= {()=>{handleClick(0)}}
                value={squares[0].mark}
                id={squares[0].id}
            />
            <Square 
                onSquareClick= {()=>{handleClick(1)}}
                value={squares[1].mark}
                id={squares[1].id}
            />
            <Square 
                onSquareClick= {()=>{handleClick(2)}}
                value={squares[2].mark}
                id={squares[2].id}
            />
            
            <Square 
                onSquareClick= {()=>{handleClick(3)}}
                value={squares[3].mark}
                id={squares[3].id}
            />
            <Square 
                onSquareClick= {()=>{handleClick(4)}}
                value={squares[4].mark}
                id={squares[4].id}
            />
            <Square 
                onSquareClick= {()=>{handleClick(5)}}
                value={squares[5].mark}
                id={squares[5].id}
            />

            <Square
                onSquareClick= {()=>{handleClick(6)}}
                value={squares[6].mark}
                id={squares[6].id}
            />
            <Square 
                onSquareClick= {()=>{handleClick(7)}}
                value={squares[7].mark}
                id={squares[7].id}
            />
            <Square 
                onSquareClick= {()=>{handleClick(8)}}
                value={squares[8].mark}
                id={squares[8].id}
            />
        </div>
    )
}