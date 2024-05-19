import { useState } from "react";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        {/* <button onClick={() => setStep((step) => step - 1)}>-</button> */}
        {/* <button onClick={() => setStep((step) => step + 1)}>+</button> */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        {step}
      </div>
      <div className="button-container">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
      {count !== 0 || step !== 0 ? (
        <button
          onClick={(e) => {
            setStep(Number(e.target.value));
            setCount(Number(e.target.value));
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
};
export default App;
