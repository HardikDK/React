import React, { useRef, useEffect } from 'react';

function Ref() {
  // Creating a ref object
  const myRef = useRef(null);

  // Using the ref to focus on an input element after the component mounts
  useEffect(() => {
    myRef.current.focus();
  }, []);
  console.log('myRef', myRef.current);

  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={() => console.log(myRef.current.value)}>
        Log Input Value
      </button>
      <button className="ml-2" onClick={() => alert(myRef.current.value)}>
        Alert Input Value
      </button>
    </div>
  );
}

export default Ref;