import React, { useState } from "react";
import Button from "../../Layout/Button/Button";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  const counterClick = () => setCount((count += 1));

  const resetCounter = () => setCount(0);

  return (
    <div>
      <nav className="nav_style">
        <div className="nav_content">Demo Counter</div>
      </nav>
      <Button onClick={counterClick} className="button_style" title="Count" />
      <Button onClick={resetCounter} className="button_style" title="Reset" />

      <h1 style={{ marginTop: "1em" }}>{count}</h1>
    </div>
  );
};

export default Counter;
