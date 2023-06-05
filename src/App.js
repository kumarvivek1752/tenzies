import React, { useState } from 'react';

import './App.css';
import Die from "./Die"
import { nanoid } from 'nanoid';

function App() {
  
const [dice, setDice] = useState(allNewDice())
function generateNewDie() {
  return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
  }
}
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
  }
  console.log(dice)

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
  }))
  }


  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
}

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={ ()=>holdDice(die.id) } />)


  return (
    <main className="App">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
        {diceElements}
            </div>
        <button onClick={rollDice} className='roll-dice'>Roll</button>
    </main>
  );
}

export default App;
