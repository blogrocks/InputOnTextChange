# react-input-for-chinese

> 中文输入时，文本框中会出现键入的拼音，并且会触发 input 的 onChange 回调，尽管此时
> 中文字尚未落入文本框。如果父组件需要在 onChange 时执行数据搜索的话，这可能会触发很
> 多无效搜索。所以这个组件的目的是为了在汉字落入文本框后才触发 onChange。

[![NPM](https://img.shields.io/npm/v/react-input-for-chinese.svg)](https://www.npmjs.com/package/react-input-for-chinese) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-for-chinese
```

## Usage

```jsx
import React, { useState } from "react";

import InputOnTextChange from 'react-input-for-chinese'
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
![gif.gif](https://github.com/blogrocks/InputOnTextChange/raw/main/gif.gif)
## License

MIT © [](https://github.com/)
