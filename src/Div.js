import "./App.css";
import one from "../src/assets/1.jpg";
import two from "../src/assets/2.jpg";
import three from "../src/assets/3.jpg";
import four from "../src/assets/4.jpg";
import five from "../src/assets/5.jpg";
import six from "../src/assets/6.jpg";
import React, { useState, useEffect } from "react";
const Div = () => {
  const [positionOne, setPositionOne] = useState(1);

  const [imageOne, setImageOne] = useState("");
  const [positionTwo, setPositionTwo] = useState(1);

  const [imageTwo, setImageTwo] = useState("");
  const handleRollDice = () => {
    const diceValueOne = Math.floor(Math.random() * 6) + 1;
    const newPositionOne = positionOne + diceValueOne;
    const displayImageOne =
      diceValueOne == 1
        ? one
        : diceValueOne == 2
        ? two
        : diceValueOne == 3
        ? three
        : diceValueOne == 4
        ? four
        : diceValueOne == 5
        ? five
        : diceValueOne == 6
        ? six
        : "";

    setImageOne(displayImageOne);

    // Define snakes and ladders
    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionOne] || newPositionOne;

    setPositionOne(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };
  const handleRollDices = () => {
    const diceValueTwo = Math.floor(Math.random() * 6) + 1;
    const newPositionTwo= positionTwo + diceValueTwo;
    const displayImageTwo =
      diceValueTwo == 1
        ? one
        : diceValueTwo == 2
        ? two
        : diceValueTwo == 3
        ? three
        : diceValueTwo == 4
        ? four
        : diceValueTwo == 5
        ? five
        : diceValueTwo == 6
        ? six
        : "";

    setImageTwo(displayImageTwo);

    // Define snakes and ladders
    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder =
      snakesAndLadders[newPositionTwo] || newPositionTwo;

    setPositionTwo(
      newPositionWithSnakeOrLadder > 100
        ? positionOne
        : newPositionWithSnakeOrLadder
    );
  };
  useEffect(() => {
    if (positionOne === 100) {
      alert("Congratulations! You won!");
    }
  }, [positionOne]);

  return (
    <>
      <div className="App">
        <h1 className="bg-success text-light fluid w-100">
          Snake and Ladder Game
        </h1>
        <div className="board bg-success text-light border">
          {Array.from({ length: 100 }, (_, index) => (
            <div
              key={index}
              className={`cell ${positionOne === index + 1 ? "player" : positionTwo === index + 1?"players":""}`}
            >
              {index + 1}
            </div>
          ))}
        </div>{" "}
      
       <img
          src={imageTwo}
          alt="img"
          height={80}
          width={85}
          className="bg-info text-info"
        ></img> <button
          className="btn btn-danger text-light fw-bold m-4 border border-light"
          onClick={handleRollDices}
        >
          Roll Dice
        </button>
        {" "}  {positionOne}
        <button
          className="btn btn-primary text-light fw-bold m-4 border border-light"
          onClick={handleRollDice}
        >
          Roll Dice
        </button>
        <img
          src={imageOne}
          alt="img"
          height={80}
          width={85}
          className="bg-info text-info"
        ></img>
      </div>
    </>
  );
};

export default Div;
