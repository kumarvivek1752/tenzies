import React, { useState } from 'react';

import './App.css';
import Die from "./Die"
import { nanoid } from 'nanoid';

function App() {
  
const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
            value: Math.ceil(Math.random() * 6), 
          isHeld: false,
          id: nanoid()
        })
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
    setDice(allNewDice());
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={ ()=>holdDice(die.id) } />)


  return (
    <main className="App">
            <div className="dice-container">
        {diceElements}
            </div>
        <button onClick={rollDice} className='roll-dice'>Roll</button>
    </main>
  );
}

export default App;
