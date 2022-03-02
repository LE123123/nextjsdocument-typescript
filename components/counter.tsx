// @ts-nocheck

import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "../modules/counter";

const Counter = () => {
  const count = useSelector(({ counterReducer }) => counterReducer.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(incrementCount(null))}>+1</button>
      <button onClick={() => dispatch(decrementCount(null))}>-1</button>
      <button onClick={() => dispatch(resetCount(null))}>Reset</button>
    </div>
  );
};

export default Counter;
