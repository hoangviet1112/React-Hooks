import { useState, useImperativeHandle, forwardRef } from 'react'

function Modal(props, ref) {
  const [modalState, setModalState] = useState(false)

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true)
  }))

  console.log("child rendered");

  if (!modalState) return null

  return (
    <div className='modal'>
      <h2>This is child component</h2>
      <button onClick={() => setModalState(false)}>Close</button>
    </div>
  )
}

export default forwardRef(Modal)