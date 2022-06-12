import { useEffect, useRef, useState } from 'react';
import '../styles/main.css';
import Panel from './components/Panel';
import Score from './components/Score';
/**
 * Current code for generate random sequence
 * TODO: Push down to Sequence. Generate while at certain level. Wire in panel buttons.
 */
function DigitSpan() {
  const [recorded, setRecorded] = useState([]);
  const [initialized, setInitialized] = useState(false);
  // level is equivalent to score
  const [flagobj, setFlagObj] = useState({
    guessing: false,
    gameOver: false,
    level: 5
  });
  const buttonRef = useRef(null);

  const { guessing, gameOver, level } = flagobj;

  // Fresh Start (ish?) 06/12/22
  const [currententry, setCurrentEntry] = useState(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (currententry && initialized && !gameOver) {
      console.log('currIdx: ', index, ' el: ', recorded[index]);
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
    buttonRef.current = e.target.id;
    setCurrentEntry(parseInt(e.target.id));
    console.log('entry: ', currententry);

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
