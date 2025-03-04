import React, { useState } from "react";
import "./main.css";
import Header from "../header/header";
import Footer from "../footer/footer";

function Main(props) {
  const [count, setCount] = useState(props.count);

  return (
    <div>
      <Header />
      <div className="main">
        <h2>Counter for {props.name}</h2>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
