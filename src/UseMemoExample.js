import { useState, useEffect, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((prev) => prev + 1);
  };
  const incrementTwo = () => {
    setCounterTwo((prev) => prev + 1);
  };

  //use memo cache result to optimized performance
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne}>Counter {counterOne}</button>
      {isEven ? "Even" : "odd"}
      <br />
      <button onClick={incrementTwo}> Counter {counterTwo}</button>
    </div>
  );
};

export default Counter;
