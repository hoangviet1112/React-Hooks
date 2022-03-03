import { useCallback, useState } from 'react';
import './App.css';

import UseEffectHook from './Hooks Demo/UseEffectHookExample1';
import UseEffectHookExample2 from './Hooks Demo/UseEffectHookExample2';
import UseEffectHookExample3 from './Hooks Demo/UseEffectHookExample3';
import UseEffectHookExample4 from './Hooks Demo/UseEffectHookExample4';
import UseEffectHookExample5 from './Hooks Demo/UseEffectHookExample5';
import UseLayoutEffectExample from './Hooks Demo/UseLayoutEffectExample';
import UseRefHookExample from './Hooks Demo/UseRefHookExample';
import UseRefHookExample2 from './Hooks Demo/UseRefHookExample2';
import UseStateHook from './Hooks Demo/UseStateHook';
// import Content from './ReactMemoDemo/Content';
import UseCallbackDemo from './useCallbackDemo/useCallbackDemo'
import UseContextDemo from './useContextDemo/UseContextDemo';

function App() {
  // const data = [
    
  // ]

  // const [inputText, setInputText] = useState('')

  // const handleFormSubmit = () => {

  // }
  const [show, setShow] = useState(false)

  // const [count, setCount] = useState(0)

  // const [count2, setCount2] = useState(0)


  // const handleIncrease = useCallback(() => {
  //     setCount(prevCount => prevCount + 1)
  // }, [])

  // const handleIncrease2 = () => {
  //   setCount2(prevCount => prevCount + 1)
  // }
  
  return (
    <div style={{padding: "20px"}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {
        show && <UseContextDemo />
      }
    </div>
    // <div style={{padding: "20px 40px"}}>
    //   {/* <UseCallbackDemo onIncrease={handleIncrease} />
    //   <h2>{count}</h2> */}
    //   {/* <h2>{count2}</h2> */}
    //   {/* <button onClick={handleIncrease2}>Increase 2</button>   */}
    //   <form onSubmit={handleFormSubmit}>
    //     <input onChange={e => setInputText(e.target.value)} placeholder='Enter Hook' />
    //   </form>
    // </div>
  )
}

export default App;
