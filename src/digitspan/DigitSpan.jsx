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
      // }
      // if (initialized && !gameOver) {
      //   setFlagObj({
      //     ...flagobj,
      //     guessing: true
      //   });
    }
  }, [initialized]);

  const handleClick = (e) => {
    buttonRef.current = e.target.id;
    setCurrentEntry(parseInt(e.target.id));
    console.log('entry: ', currententry);
    // if (guessing) {
    //   buttonRef.current = e.target.id;
    //   console.log(buttonRef.current);
    //   //setEntry(parseInt(buttonRef.current));
    //   //console.log('checking entry: ', parseInt(buttonRef.current));
    //   let clickedInt = parseInt(buttonRef.current);
    //   //setEntry(Number(buttonRef.current));
    //   let checked = recorded;
    //   console.log('clicked: ', clickedInt, ' checkrecord: ', checked);
    //   if (clickedInt === checked[0]) {
    //     // let temp = checkrecord;
    //     checked.splice(0, 1);
    //     //  setCheckRecord(temp);
    //     console.log('checkrecord ', checked);
    //     if (checked.length === 0) {
    //       setRecorded([]);
    //       // setEntry([]);
    //       console.log('levelUp!');
    //       let inc_level = level + 1;
    //       setFlagObj({
    //         ...flagobj,
    //         level: inc_level,
    //         guessing: false
    //       });
    //       setInitialized(false);
    //       //return;
    //     }
    //   }
    //   if (clickedInt !== checked[0]) {
    //     console.log('Game Over');
    //     setFlagObj({
    //       ...flagobj,
    //       gameOver: true,
    //       guessing: false
    //     });
    //     setInitialized(false);
    //   }
    // }

  }

  // const handleGuessing = () => {

  // }

  // useEffect(() => {
  //   console.log('outside if useEffect');
  //   // if (flagobj.gameOver == true) {
  //   //   console.log('Hit game over condition...');
  //   //   return;
  //   // }
  //   // if (gameOver) {
  //   //   console.log('Game over...');

  //   // }
  //   if (!gameOver && initialized) {
  //     console.log('in game over if ');
  //     if (!guessing) {
  //       console.log('entries useEffect');

  //       console.log('record ', recorded);
  //     }
  //     if (guessing) {
  //       console.log('guessing useEffect');
  //       //handleGuessing();
  //       console.log('line 75: ', flagobj);
  //     }
  //   }
  // }, [guessing, initialized]);


  return (
    <div className="digitspan-container">
      <h3>{recorded}</h3>
      <Panel handleClick={handleClick} />
      <Score gameOver={gameOver} level={level} />
    </div>
  );
}

export default DigitSpan;
