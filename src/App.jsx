import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBITNATION } from "./Winning_combination.js";
import GameOver from "./components/GameOver.jsx";
const initialValue=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

const PLAYERS={
  X: "PLAYER 1",
  O: "PLAYER 2",
}


function active(game){
  let currentPlayer='X';
  if(game.length>0 && game[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveGameBoard(turns){
  let gameBoard=[...initialValue.map(array=>[...array])];
    for(const turn of turns){
        const{square,player}=turn;
        const{row,col}=square;
        gameBoard[row][col]=player;
    }
    return gameBoard;
}
function deriveWinner(gameBoard,players){
  let winner;
  for(const combination of WINNING_COMBITNATION){
    const firstSquare = gameBoard[combination[0].row][combination[0].col]
    const secondSquare = gameBoard[combination[1].row][combination[1].col]
    const thirdSquare = gameBoard[combination[2].row][combination[2].col]
    if(firstSquare && firstSquare===secondSquare && secondSquare===thirdSquare){
      winner=players[firstSquare];
      
    }
  }
  return winner;
}

function App(){
  const [players,setPlayers]=useState(PLAYERS)
  const[turns,setTurns]=useState([]);
  
  const activePlayer=active(turns);

  let gameBoard=deriveGameBoard(turns)

  const winner=deriveWinner(gameBoard,players);

  const hasDraw=turns.length===9 && !winner;

  function handleChange(rowIndex,colIndex) {  
    setTurns(prevTurns=>{
      const currentPlayer=active(prevTurns);
      const updatedTurns=[{
        square:{
          row:rowIndex,
          col:colIndex
        }
        ,player:currentPlayer,
      } , ...prevTurns]
      return updatedTurns;
    })
  }

  function handleRestart(){
    setTurns([]);
  }


  function handleChangeName({symbol,name}){
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers,
        [symbol]:name,
      }
    })
  }
  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player change={handleChangeName} name={PLAYERS.X} symbol="X" isActive={activePlayer==='X'}/>
            <Player change={handleChangeName} name={PLAYERS.O} symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        {( winner|| hasDraw ) && <GameOver  winner={winner} restart={handleRestart}/>}
        <GameBoard onSelect={handleChange} gameBoard={gameBoard} />
      </div>
      <Log turns={turns}/>
    </main>
  )
}
export default App;