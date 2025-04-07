import React, { useRef, useState, useEffect } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [data, setData] = useState(Array(9).fill(""));
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    let titleRef = useRef(null);

    useEffect(() => {
        checkWin();
    }, [data, count]);

    const toggle = (e, num) => {
        if (lock || data[num]) return;

        const newData = [...data];
        const newBoxes = [...boxes];

        if (count % 2 === 0) {
            newBoxes[num] = <img src={cross_icon} alt="X" />;
            newData[num] = "x";
        } else {
            newBoxes[num] = <img src={circle_icon} alt="O" />;
            newData[num] = "o";
        }

        setData(newData);
        setBoxes(newBoxes);
        setCount(count + 1);
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}>`;
        }
        else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}>`;
        }
    }

    const resetGame = () => {
        setCount(0);
        setLock(false);
        setData(Array(9).fill(""));
        setBoxes(Array(9).fill(null));
        titleRef.current.innerHTML = "Tic Tac Toe";
    }

    const reset =() => {
        setLock (false);
        data =["","","","","","","","",""]
        titleRef.current.innerHTML='Tic Tac Toe In <span> React</span>'
    }
    return (
        <div className='container'>
            <h1 className="title" ref={titleRef}>Tic Tac Toe</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}>{boxes[0]}</div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}>{boxes[1]}</div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}>{boxes[2]}</div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}>{boxes[3]}</div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}>{boxes[4]}</div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}>{boxes[5]}</div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}>{boxes[6]}</div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}>{boxes[7]}</div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}>{boxes[8]}</div>
                </div>
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    );
}

export default TicTacToe;