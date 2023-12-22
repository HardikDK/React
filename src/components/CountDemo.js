import {React, useState} from 'react';

function CountDemo() {
  // body...
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Count: {count}</p>
      <button className="btn mr-2" onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CountDemo;