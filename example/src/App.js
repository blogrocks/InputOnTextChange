import React, { useState } from "react";

import { InputOnTextChange } from 'react-input-for-chinese'
import 'react-input-for-chinese/dist/index.css'

const App = () => {
  const [text, setText] = useState('');

  const handleChange = (v) => setText(v);
  return (
    <>
      <InputOnTextChange value={text} onChange={handleChange} />
      {text}
    </>
  )
}

export default App
