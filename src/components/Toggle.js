import React, { useState } from 'react';

function ToggleVisibility() {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  }
  return (
    <div>
      <button onClick={toggleButton}>Show/Hide Text</button>
      { toggle && <p>Toggle me!</p> }
    </div>
  );
}

export default ToggleVisibility;
