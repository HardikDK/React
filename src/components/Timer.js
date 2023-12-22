import React, { useEffect, useState } from 'react';

function Timer() {
  // body...
  // const clock = Date.now();
  const clock = new Date();
  const [date, setDate] = useState(clock);
  // console.log('date', date)
  // console.log('clock.toLocaleTimeString()', clock.toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setDate(clock.toLocaleTimeString());
    });
  }, []);
  return(
    <div>
      <p>{clock.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;