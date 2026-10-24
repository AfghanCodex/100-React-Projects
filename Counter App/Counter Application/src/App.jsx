import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  function handlePlus() {
    setCount(count + 1);
    setTotalClicks(totalClicks + 1);
  }

  function handleSubtract() {
    setCount(() => (count > 0 ? count - 1 : 0));
    setTotalClicks(totalClicks + 1);
  }

  return (
    <div className="counter">
      <div className="Total_Counts">
        <p className="counts">{count}</p>
      </div>
      <div className="Buttons">
        <button onClick={handlePlus}>Plus</button>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
      <div className="TotalClicks">
        <span className="totalClicks">{totalClicks}</span>
      </div>
    </div>
  );
};

export default App;
