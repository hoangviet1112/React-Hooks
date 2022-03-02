import React, { useEffect, useRef, useState } from 'react'

const UseRefHookExample2 = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [submitted, setSubmitted] = useState(false)
  const renderCount = useRef(1)

  // const [count, setCount] = useState(1)

  const inputRef = useRef()

  useEffect(() => {
    renderCount.current = renderCount.current + 1  
    // setCount(prevCount => prevCount + 1)  
  })

  const handleSubmit = () => {
    setSubmitted(true)
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <input value={age} onChange={e => setAge(e.target.value)} />
      <button onClick={handleSubmit}>
        Submit
      </button>
      {submitted && (
      <>
        <p>My name is {name}</p>
        <p>My age is {age}</p>
      </>
      )}
      {/* <p>I rendered {count} times</p> */}
      <p>I rendered {renderCount.current} times</p>
    </div>
  )
}

export default UseRefHookExample2