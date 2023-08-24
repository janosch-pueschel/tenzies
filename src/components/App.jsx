import React from "react";
import Die from "./Die";
import Confetti from "react-confetti";

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
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
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
  }

  function holdDie(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const checkValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === checkValue);

    allHeld && allSameValue ? setTenzies(true) : "";
  }, [dice]);

  return (
    <main className="flex flex-col justify-center items-center bg-neutral-100 max-w-4xl h-90 m-auto rounded-lg">
      {tenzies && <Confetti />}
      <h1 className="mb-2 text-4xl font-bold">Tenzies</h1>
      <p className="mb-14 w-4/6 text-lg text-center">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="w-4/6 grid grid-cols-5 grid-rows-2 gap-12">
        {diceElements}
      </div>
      <button
        onClick={rollDice}
        className="bg-fuchsia-600 mt-10 px-8 py-2 rounded-lg text-2xl text-white font-bold cursor-pointer"
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
