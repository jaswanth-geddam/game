import logo from './logo.svg';
import './app.css';
import { useEffect, useState } from 'react';
function App() {
  const [game, setGame] = useState(["", "", "", "", "", "", "", "", "",])
  const [turn, setTurn] = useState("x")
  const[win,setWin]=useState("")
  const Games = () => {
    setGame(["", "", "", "", "", "", "", "", "",])
  }
  const inp = (x) => {
   
    if (turn == "x") {
      setTurn("o")
    }
    else {
      setTurn("x")
    }
    console.log(x-1,game[x-1])
    if (x == 1) {
      //console.log(game[x])
      if (game[x - 1] == "o" || game[x - 1] == "x") {
      
        alert("you already visted")
        
    
        
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 2) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 3) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 4) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 5) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 6) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 7) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 8) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if (x == 9) {
      if (game[x - 1] == "o" || game[x - 1] == "x") {
        alert("you already visted")
      }
      else {
        game[x - 1] = turn
      }
    }
    if ((game[0] == "x" && game[1] == "x" && game[2] == "x") || game[0] == "o" && game[1] == "o" && game[2]== "o") {
      setWin(`game wins ${game[0]}`)
     
      console.log(game[0])
    }
    if ((game[3] == "x" && game[4] == "x" && game[5] == "x") || (game[3] == "o" && game[4] == "o" && game[5] == "o")) {
      setWin(`game wins ${game[3]}`)
     
    }
    if ((game[6] == "x" && game[7] == "x" && game[8] == "x") || (game[6] == "o" && game[7] == "o" && game[8] == "o")) {
      alert(` game wins ${game[6]}`)
     
    }
    if ((game[0] == "x" && game[3] == "x" && game[6] == "x") || (game[0] == "o" && game[3] == "o" && game[6] == "o")) {
      setWin(`game wins ${game[0]}`)
     
    }
    if ((game[1] == "x" && game[4] == "x" && game[7] == "x") || (game[1] == "o" && game[4] == "o" && game[7] == "o")) {
      setWin(`game wins ${game[1]}`)
     
    }
    if ((game[2] == "x" && game[8] == "x" && game[5] == "x") || (game[2] == "o" && game[5] == "o" && game[8] == "o")) {
      setWin(`game wins ${game[2]}`)
     
    }
    if ((game[0] == "x" && game[4] == "x" && game[8] == "x") || (game[0] == "o" && game[4] == "o" && game[8] == "o")) {
      setWin(`game wins ${game[0]}`)
     
    }
    if ((game[2] == "x" && game[4] == "x" && game[6] == "x") || (game[2] == "o" && game[4] == "o" && game[6] == "o")) {
      setWin(`game wins ${game[2]}`)
     
    }
   
    console.log(x-1,game[x-1])
  }
  return (<>
    <h1>{turn}</h1><div className="grid-container">
      <div onClick={() => inp(1)} className="grid-item">{game[0]}</div>
      <div onClick={() => inp(2)} className="grid-item">{game[1]}</div>
      <div onClick={() => inp(3)} className="grid-item">{game[2]}</div>
      <div onClick={() => inp(4)} className="grid-item">{game[3]}</div>
      <div onClick={() => inp(5)} className="grid-item">{game[4]}</div>
      <div onClick={() => inp(6)} className="grid-item">{game[5]}</div>
      <div onClick={() => inp(7)} className="grid-item">{game[6]}</div>
      <div onClick={() => inp(8)} className="grid-item">{game[7]}</div>
      <div onClick={() => inp(9)} className="grid-item">{game[8]}</div>
    </div>
    <div className='win'>{win}</div>
    <button onClick={() => Games()}>start</button></>);
}
export default App;
