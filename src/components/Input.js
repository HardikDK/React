import React, { useState } from 'react';

function Input() {
  const [data, setData] = useState('');
  const [text, setText] = useState('')
  console.log("data" , data)
  console.log("text" , text)

  //handleChnage function
  const handleChange = (event) => {
    setText(event.target.value);
  }

  //handleSubmit function
  const handaleSubmit = (e) => {
    e.preventDefault();
    setData(text)
    // const sendData = await 
  }
  return (
    <div>
      <input type="text"  onChange={handleChange} style={{border:"1px solid black"}}/>
      <p>Input text: {data}</p>
      <button type="submit"  onClick={handaleSubmit} style={{border:"1px solid black" , padding:"8px 10px"}}>Submit</button>
    </div>
  );
}

export default Input;
