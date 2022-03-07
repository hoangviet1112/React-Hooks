import { useState, useReducer } from 'react';
import './App.css';
// import GlobalStateDemo from './GlobalStateDemo/GlobalStateDemo';

// import UseEffectHook from './Hooks Demo/UseEffectHookExample1';
// import UseEffectHookExample2 from './Hooks Demo/UseEffectHookExample2';
// import UseEffectHookExample3 from './Hooks Demo/UseEffectHookExample3';
// import UseEffectHookExample4 from './Hooks Demo/UseEffectHookExample4';
// import UseEffectHookExample5 from './Hooks Demo/UseEffectHookExample5';
// import UseLayoutEffectExample from './Hooks Demo/UseLayoutEffectExample';
import UseRefHookExample from './useRefDemo/UseRefHookExample';
import UseRefHookExample2 from './useRefDemo/UseRefHookExample2';
import ReactContextDemo from './ReactContextDemo/ReactContextDemo';
import UserDeTailsComponent from './useContextDemo/UserDetailsComponent';
import UseImperativeHandleExample from './useImperativeHandleDemo/ParentComponent'
// import UseStateHook from './Hooks Demo/UseStateHook';
// // import Content from './ReactMemoDemo/Content';
// import UseCallbackDemo from './useCallbackDemo/useCallbackDemo'
// import UseContextDemo from './useContextDemo/UseContextDemo';
// import UserDetailsComponent from './useContextDemo/UserDetail/UserDetailsComponent';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [toggle, setToggle] = useState(false)

  const initialState = {
    showComponent: false,
    showUseRef1: false,
    showUseRef2: false,
    showReactMemo: false,
    showUseCallback: false,
    showUseMemo: false,
    showUseContext: false,
    showUseReducer: false,
    showGlobalState: false,
    showUseImperativeHandle: false,
    showUseDebugValue: false
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'useRefExam1':
        return {
          ...state,
          showUseRef1: true
        }
      case 'useRefExam2':
        return {
          ...state,
          showUseRef2: true
        }
      case 'ReactMemoExam':
        return {
          ...state,
          showReactMemo: true
        }
      case 'useCallbackExam':
        return {
          ...state,
          showUseCallback: true
        }
      case 'useMemoExam':
        return {
          ...state,
          showUseMemo: true
        }
      case 'ReactContextExam':
        return {
          ...state,
          showReactContext: true
        }
      case 'useContextExam':
        return {
          ...state,
          showUseContext: true
        }
      case 'GlobalStateExam':
        return {
          ...state,
          showGlobalState: true
        }
      case 'useImperativeHandleExam':
        return {
          ...state,
          showUseImperativeHandle: true
        }
      case 'useDebugValueExam':
        return {
          ...state,
          showUseDebugValue: true
        }
      default:
        throw new Error('Input not valid.')
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div style={{padding: "20px"}}>
      <input 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: inputValue })}>Submit</button>
      <br />
      <button onClick={() => setToggle(prevState => !prevState)}>Mount Component</button>
      {
        toggle && state.showUseRef1 && <UseRefHookExample />
      }
      {
        toggle && state.showUseRef2 && <UseRefHookExample2 />
      }
      {
        toggle && state.showUseContext && <UserDeTailsComponent />
      }
      {
        toggle && state.showReactContext && <ReactContextDemo />
      }
      {
        toggle && state.showUseImperativeHandle && <UseImperativeHandleExample />
      }
      {/* {
        toggle && state.showReactMemo && <ReactMemoExam />
      }
      {
        toggle && state.showUseCallback && <UseCallbackExam />
      }
      {
        toggle && state.showUseMemo && <UseMemoExample />
      }
      {
        toggle && state.showReactContext && <ReactContextExample />
      }
      {
        toggle && state.showUseReducer && <UseReducerExample />
      }
      {
        toggle && state.showGlobalState && <GlobalStateExample />
      }
      {
        toggle && state.showUseDebugValue && <UseDebugValueExample />
      } */}
    </div>
  )
}

export default App;
