# react-input-for-chinese

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-input-for-chinese.svg)](https://www.npmjs.com/package/react-input-for-chinese) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-for-chinese
```

## Usage

```jsx
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
```

## License

MIT © [](https://github.com/)
