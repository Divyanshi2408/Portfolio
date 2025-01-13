import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SnakeGame.css";

const SnakeGame = ({ onSkip }) => {
  const [food, setFood] = useState([8, 2]);
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const gridWidth = 10;
  const gridHeight = 25;
  const [snake, setSnake] = useState([
    [Math.floor(gridWidth / 2), Math.floor(gridHeight / 2)],
  ]);

  const generateFood = () => {
    let newFood;
    do {
      newFood = [
        Math.floor(Math.random() * gridWidth),
        Math.floor(Math.random() * gridHeight),
      ];
    } while (
      snake.some((segment) => segment[0] === newFood[0] && segment[1] === newFood[1])
    );
    return newFood;
  };

  const moveSnake = () => {
    if (gameOver) return;

    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];

    let newHead;
    switch (direction) {
      case "UP":
        newHead = [head[0], head[1] - 1];
        break;
      case "DOWN":
        newHead = [head[0], head[1] + 1];
        break;
      case "LEFT":
        newHead = [head[0] - 1, head[1]];
        break;
      case "RIGHT":
      default:
        newHead = [head[0] + 1, head[1]];
        break;
    }

    newSnake.push(newHead);

    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood(generateFood());
      setScore(score + 1);
    } else {
      newSnake.shift();
    }

    if (
      newHead[0] < 0 ||
      newHead[1] < 0 ||
      newHead[0] >= gridWidth ||
      newHead[1] >= gridHeight ||
      newSnake.slice(0, -1).some(
        (segment) => segment[0] === newHead[0] && segment[1] === newHead[1]
      )
    ) {
      setGameOver(true);
      setGameStarted(false);
    } else {
      setSnake(newSnake);
    }
  };

  const changeDirection = (e) => {
    const key = e.key || e.target.name;
    switch (key) {
      case "ArrowUp":
      case "UP":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
      case "DOWN":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
      case "LEFT":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
      case "RIGHT":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.addEventListener("keydown", changeDirection);
      return () => {
        document.removeEventListener("keydown", changeDirection);
      };
    }
  }, [direction, gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(moveSnake, 200);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    if (score === 10) {
      onSkip(); 
    }
  }, [score, onSkip]);

  const startGame = () => {
    setSnake([[Math.floor(gridWidth / 2), Math.floor(gridHeight / 2)]]);
    setFood(generateFood());
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  return (
    <div className="whole-game">
      <div className="game-area">
        {Array.from({ length: gridHeight }, (_, y) =>
          Array.from({ length: gridWidth }, (_, x) => (
            <div
              key={`${x}-${y}`}
              className={`cell ${
                snake.some((segment) => segment[0] === x && segment[1] === y)
                  ? "snake"
                  : food[0] === x && food[1] === y
                  ? "food"
                  : ""
              }`}
            ></div>
          ))
        )}
        
        {gameOver && <p className="game-over-text">Game Over!</p>}
        <div className="game-btn">
          {!gameStarted && !gameOver && (
            <button className="start-button" onClick={startGame}>
              Start Game
            </button>
          )}
          {gameOver && (
            <button className="restart-button" onClick={startGame}>
              Play Again
            </button>
          )}
        </div>
      </div>
      
      <div className="game-about">
      <div className="game-s">
      <div className="game-control">
          <div className="game-title">
          <h6>// Use keyboard
        </h6>
          <h6>// Arrows to Play</h6>
          </div>
          <div className="control-buttons">
          <div>
          <button name="UP" onClick={changeDirection}>
              <FaArrowUp />
              </button>
          </div> 
              <div>
                <button name="LEFT" onClick={changeDirection}>
                <FaArrowLeft />
                </button>
                <button className="down" name="DOWN" onClick={changeDirection}>
              <FaArrowDown />
              </button>
                <button name="RIGHT" onClick={changeDirection}>
                <FaArrowRight />
                </button>
              </div>
            </div>
            </div>
        <div className="game-info">
        <div className="game-title">
          <h6>// Food Left
        </h6>

          </div>
          <p className="score">
          Score: {score}</p>
          <div className="food-left">
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className={`food-dot ${index < score ? "eaten" : ""}`}
              ></span>
            ))}
          </div>
         
        </div>
        </div>
        <button className="skip-button" onClick={onSkip}>
          Skip
        </button>
        
      </div>
    </div>
  );
};

export default SnakeGame;
