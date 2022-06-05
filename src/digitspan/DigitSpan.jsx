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
  const [entry, setEntry] = useState(0);
  const [checkrecord, setCheckRecord] = useState([]);
  // level is equivalent to score
  const [flagobj, setFlagObj] = useState({
    guessing: false,
    gameOver: false,
    level: 5
  });
  const buttonRef = useRef(null);

  const { guessing, gameOver, level } = flagobj;

  const randomizeDigit = () => {
    let num = Math.floor(Math.random() * 9) + 1;
    return num;
    // setTimeout(() => {
    // }, 500);
  }
  const handleClick = (e) => {
    if (guessing) {
      buttonRef.current = e.target.id;
      console.log(buttonRef.current);
      //setEntry(parseInt(buttonRef.current));
      //console.log('checking entry: ', parseInt(buttonRef.current));
      let clickedInt = parseInt(buttonRef.current);
      //setEntry(Number(buttonRef.current));
      setCheckRecord(recorded);
      if (checkrecord.length === 0) {
        setRecorded([]);
        // setEntry([]);
        console.log('levelUp!');
        let inc_level = level + 1;
        setFlagObj({
          ...flagobj,
          level: inc_level,
          guessing: false
        });
        return;
      }
      if (clickedInt === checkrecord[0]) {
        let temp = checkrecord;
        temp.splice(0, 1);
        setCheckRecord(temp);
      }
      if (clickedInt !== checkrecord[0]) {
        console.log('Game Over');
        setFlagObj({
          ...flagobj,
          gameOver: true,
          guessing: false
        });
      }
    }

  }

  const handleGuessing = () => {

  }

  useEffect(() => {
    console.log('outside if useEffect');
    // if (flagobj.gameOver == true) {
    //   console.log('Hit game over condition...');
    //   return;
    // }
    if (!gameOver) {
      console.log('in game over if ');
      if (!guessing) {
        console.log('entries useEffect');
        let temp_entries = [];
        for (let i = 0; i < level; i++) {
          let random = randomizeDigit();
          temp_entries.push(random);
          setRecorded(temp_entries);
        }
        setFlagObj({
          ...flagobj,
          guessing: true
        });
      }
      if (guessing) {
        console.log('guessing useEffect');
        //handleGuessing();
        console.log('line 75: ', flagobj);
      }
    }
  }, [guessing]);


  return (
    <div className="digitspan-container">
      <h3>{recorded}</h3>
      <Panel handleClick={handleClick} />
      <Score gameOver={gameOver} level={level} />
    </div>
  );
}

export default DigitSpan;
