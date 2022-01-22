import { useState } from 'react/cjs/react.development';
import './App.css';
import UseEffectHook from './Hooks Demo/UseEffectHook';
import UseStateHook from './Hooks Demo/UseStateHook';

function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div style={{padding: "20px"}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {
        show && <UseEffectHook />
      }
    </div>
  )
}

export default App;
