import { useState } from 'react';

// Example checkbox 2-way binding
// Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {
//   const [checked, setChecked] = useState([])

//   function handleSubmit() {
//     console.log({ ids: checked });
//   }

//   function handleChange(id) {
//     setChecked(prevValue => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter(item => item !== id)
//       } else {
//         return [...prevValue, id]
//       }
//     })
//   }

//   return (
//     <div style={{padding: 32}}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input 
//               type='checkbox'
//               checked={checked.includes(course.id)} 
//               onChange={() => handleChange(course.id)} 
//             />
//               {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

function UseStateHook() {
  const [input, setInput] = useState('')
  const [toDoList, setToDoList] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('To Do'))

    return storageJobs || []
  })

  function handleSubmit() {    
    setToDoList(prevValue => {
      const newJobs = [...prevValue, input]
      
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('To Do', jsonJobs)

      return newJobs
    })

    setInput("")
  }

  console.log(toDoList);
  
  return (
    <div style={{padding: "40px"}}>
      <input onChange={e => setInput(e.target.value)} value={input} />
      <button onClick={handleSubmit}>
        ADD  
      </button>  
      <ul>
        {
          toDoList.map(todo => {
            return (
              <li>
                {todo}
              </li>
            )
          })
        }  
      </ul>  
    </div>
  )
}

export default UseStateHook;