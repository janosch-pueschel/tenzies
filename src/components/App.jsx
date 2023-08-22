import React from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(Math.ceil(Math.random() * 6));
    }
    return dice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  function rollDice() {
    setDice(allNewDice());
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
