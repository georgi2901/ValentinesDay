import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Ani please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media1.tenor.com/m/J3o-7E-2JGAAAAAd/emuahh.gif"
          />
          <div className="text">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearths"
            src="https://media1.tenor.com/m/3YCaPcgcfFkAAAAC/rose-rosa.gif"
          />
          <div className="textA">Will you be my valentine, Annie?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
