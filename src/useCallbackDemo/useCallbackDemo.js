import { memo } from 'react'
function UseCallbackDemo({ onIncrease }) {
  console.log("re-render!");  
  return (
    <div>
      <h1>Hello Enouvoers</h1>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  )
}

export default memo(UseCallbackDemo)