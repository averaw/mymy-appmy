import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const inisialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка", price: "200" },
    { id: 2, value: 0, name: "Вилка", price: "200" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(inisialState);

  const handelDelete = (id) => {
    const newCounters = counters.filter((counters) => counters.id !== id);
    setCounters(newCounters);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((counter) => {
      return counter.id === id
        ? { ...counter, value: counter.value + 1 }
        : counter;
    });

    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      return counter.id === id
        ? { ...counter, value: counter.value - 1 }
        : counter;
    });

    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(inisialState);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handelDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2"
       onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
