import React, { useState, useRef } from 'react'

const InputOnTextChange = ({
  onChange: onChangeProp = () => {},
  value: valueProp,
  ...restProps
}) => {
  const [text, setText] = useState('')
  const inst = useRef({ composing: false })

  const onCompositionStart = () => {
    inst.current.composing = true // 标志中文编辑模式开始
  }
  const onCompositionEnd = () => {
    inst.current.composing = false // 中文编辑模式结束
    onChangeProp(text) // 完成中文编辑后再通知 onChange 回调。
  }

  const originalOnChange = (e) => {
    const value = e.target.value
    if (inst.current.composing) {
      // 正在编辑，只暂存输入值，但不回调 onChange
      setText(value)
    } else {
      // 非中文编辑模式，直接回调 onChange
      onChangeProp(value)
    }
  }

  return (
    <input
      value={!inst.current.composing ? valueProp : text}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      onChange={originalOnChange}
      {...restProps}
    />
  )
}
export default InputOnTextChange
