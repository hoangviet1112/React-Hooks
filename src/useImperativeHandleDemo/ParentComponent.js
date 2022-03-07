import { useRef } from 'react'
import Modal from './ChildComponent'

function ParentComponent() {
  const modalRef = useRef()

  const handleOpenModal = () => {
    modalRef.current.openModal()
  }

  console.log('parent rendered');

  return (
    <div className='App'>
      <h1>Parent Component</h1>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  )
}

export default ParentComponent