import React, { useEffect, useState } from "react";
import "./main.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../../slices/counterSlice";

function Main(props) {
  const [count, setCount] = useState(props.count);
  const [showCapMessage, setShowCapMessage] = useState(false);
  const [isCapReached, setIsCapReached] = useState(false);

  const counterFromStore = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count > 20) {
      setShowCapMessage(true);
      setIsCapReached(true);
    } else {
      setShowCapMessage(false);
      setIsCapReached(false);
    }
  }, [count]);

  return (
    <div>
      <Header />
      <div className="main">
        <h2>Counter for {props.name}</h2>
        <h2>{count}</h2>
        <h2>Store Counter Value is :{counterFromStore}</h2>

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => dispatch(increment())}>+ S</button>

        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => dispatch(reset())}>Reset S</button>

        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => dispatch(decrement())}>- S</button>

        <button onClick={() => dispatch(incrementByAmount(5))}>Update by 5</button>
      </div>
      {showCapMessage && <h1>Hold on, cap is reached....</h1>}
      <Footer />
    </div>
  );
}

export default Main;
