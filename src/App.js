import { useState } from 'react';
import './App.css';
import Box from './componants/Box';
const initialState = ["", "", "","", "", "","", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance,  setIsXChance] = useState(false);  

  const onSquareClicked = (index) => {
    let string = Array.from(gameState);    
    string[index] = isXChance?"X":"O";    
    setGameState(string);
    setIsXChance(!isXChance);
  }

  

  return (
    <div className="App">
      <div className="board p-5 bg-slate-400 w-1/4 mx-auto">

        <div className=" mx-auto flex justify-between mb-6">
        <Box state={gameState[0]} onClick={()=> onSquareClicked(0)} />
        <Box state={gameState[1]} onClick={()=> onSquareClicked(1)} />
        <Box state={gameState[2]} onClick={()=> onSquareClicked(2)} />
        </div>
        <div className=" mx-auto flex justify-between mb-6">
        <Box state={gameState[3]} onClick={()=> onSquareClicked(3)} />
        <Box state={gameState[4]} onClick={()=> onSquareClicked(4)} />
        <Box state={gameState[5]} onClick={()=> onSquareClicked(5)}/>
        </div>
        <div className="mx-auto flex justify-between">
        <Box state={gameState[6]} onClick={()=> onSquareClicked(6)} />
        <Box state={gameState[7]} onClick={()=> onSquareClicked(7)} />
        <Box state={gameState[8]} onClick={()=> onSquareClicked(8)} />
        </div>

      </div>



    </div>
  );
}

export default App;
