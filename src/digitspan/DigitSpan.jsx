import { useEffect, useRef, useState } from 'react';
import '../styles/main.css';
import Panel from './components/Panel';
import Score from './components/Score';
/**
 * Current code for generate random sequence
 * TODO 06/12/22: Add accurate UI logic to reflect flashes and guesses
 */
function DigitSpan() {
  const [recorded, setRecorded] = useState([]);
  const [initialized, setInitialized] = useState(false);
  // level is equivalent to score
  const [flagobj, setFlagObj] = useState({
    gameOver: false,
    level: 5
  });

  const { gameOver, level } = flagobj;
  const [currententry, setCurrentEntry] = useState(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (currententry && initialized && !gameOver) {
      if (currententry !== recorded[index]) {
        setFlagObj({
          ...flagobj,
          gameOver: true,
          guessing: false
        });
      } else if (index == recorded.length - 1) {
        console.log('WINNNERRRR');
        setCurrentEntry(null);
        setIndex(0);
        setFlagObj({
          ...flagobj,
          level: level + 1
        });
        setInitialized(false);
      }
      else {
        setIndex(index + 1);
      }
    }
  }, [initialized, currententry])
  const randomizeDigit = () => {
    let num = Math.floor(Math.random() * 9) + 1;
    return num;
    // setTimeout(() => {
    // }, 500);
  }
  useEffect(() => {
    if (!initialized && !gameOver) {
      let temp = [];
      for (let i = 0; i < level; i++) {
        let randomized = Math.floor(Math.random() * 9) + 1;
        temp.push(randomized);
        console.log('i ', i, 'rec ', recorded);
      }
      setRecorded(temp);
      setInitialized(true);
    }
  }, [initialized]);

  const handleClick = (e) => {
    setCurrentEntry(parseInt(e.target.id));

  }

  return (
    <div className="digitspan-container">
      <h3>{recorded}</h3>
      <Panel handleClick={handleClick} />
      <Score gameOver={gameOver} level={level} />
    </div>
  );
}

export default DigitSpan;
