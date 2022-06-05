import { useEffect, useState } from 'react';

/**
 * Current code for generate random sequence.
 * TODO: Push down to Sequence. Generate while at certain level. Wire in panel buttons.
 */
function DigitSpan() {
  const [digit, setDigit] = useState(0);
  const [recorded, setRecorded] = useState([]);
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    let randomized = Math.floor(Math.random() * 9) + 1;
    setDigit(randomized);
    setRecorded([...recorded, digit]);
  }, [flash]);

  useEffect(() => {
    setTimeout(() => {
      setFlash(!flash);
    }, 2000);
    console.log(recorded);
  })
  return (
    <div className="digitspan-container">
      <p>Current digit: {digit}</p>
      <br></br>
      <p>Recorded Sequence: {recorded}</p>
    </div>
  );
}

export default DigitSpan;
