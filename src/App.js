import { useState } from 'react/cjs/react.development';
import './App.css';
import UseEffectHook from './Hooks Demo/UseEffectHookExample1';
import UseEffectHookExample2 from './Hooks Demo/UseEffectHookExample2';
import UseEffectHookExample3 from './Hooks Demo/UseEffectHookExample3';
import UseEffectHookExample4 from './Hooks Demo/UseEffectHookExample4';
import UseEffectHookExample5 from './Hooks Demo/UseEffectHookExample5';
import UseStateHook from './Hooks Demo/UseStateHook';

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div style={{padding: "20px"}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {
        show && <UseEffectHookExample5 />
      }
    </div>
  )
}

export default App;
