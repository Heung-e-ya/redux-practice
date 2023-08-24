import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };
  return (
    <div>
      <button onClick={increase}>증가버튼</button>
      <button onClick={decrease}>감소버튼</button>
      <div>
        현재 클릭 수 : <h1>{count}</h1>
      </div>

      <Box />
    </div>
  );
}

export default App;
