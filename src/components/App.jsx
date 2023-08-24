import React from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i,
      });
    }
    return dice;
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      hold={holdDie}
    />
  ));

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            };
      })
    );
  }

  function holdDie(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  return (
    <main className="flex flex-col justify-center items-center bg-neutral-100 max-w-4xl h-90 m-auto rounded-lg">
      <div className="w-4/6 grid grid-cols-5 grid-rows-2 gap-12">
        {diceElements}
      </div>
      <button
        onClick={rollDice}
        className="bg-fuchsia-600 mt-10 px-8 py-2 rounded-lg text-2xl text-white font-bold cursor-pointer"
      >
        Roll
      </button>
    </main>
  );
}
