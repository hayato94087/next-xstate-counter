import { useState } from "react";

type Props = {
  initialCount?: number;
};

type ReturnType = [number, {
  add: (value:number) => void;
  subtract: (value:number) => void;
  set: (value:number) => void;
}];

export const useCounter = ({ initialCount = 0 }: Props): ReturnType => {
  const [count, setCount] = useState(initialCount);

  const add = (value:number) => setCount((prevCount) => prevCount + value);
  const subtract = (value:number) => setCount((prevCount) => prevCount - value);
  const set = (value:number) => setCount(value);

  return [ count, {add, subtract, set} ];
};