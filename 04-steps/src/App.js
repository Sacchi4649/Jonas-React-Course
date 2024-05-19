import { useState } from "react";

const messages = [
  "Sempro",
  "Belajar React ⚛️",
  "Lanjut ngoding backend 💻",
  "Design UI/UX",
  "Tulis TA",
  "Sidang TA 😀",
  "Game Over 🥳",
];

const App = () => {
  const [step, setStep] = useState(1); //di dalam useState itu default value
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  const handleNext = () => {
    if (step < messages.length) setStep(step + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
            <div className={step >= 6 ? "active" : ""}>6</div>
            <div className={step >= 7 ? "active" : ""}>7</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
