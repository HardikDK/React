import React, { useState } from 'react';

function InputField() {
  const [data, setData] = useState('');
  const [text, setText] = useState('');
  const handleSubmit = (event) => {
    setText(data);
  }
  return (
    <div>
      <input type="text" name="username" onChange={(event) => setData(event.target.value)} />
      <p>Input text: {text}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputField;
