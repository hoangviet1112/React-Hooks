import React, { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

export const UserDetailsContext = createContext()

export default function UserDetailsComponent() {  
  const [userDetails, setUserDetails] = useState({
    name: "Viet",
    age: 29,
  })

  const handleClick = () => {
    setUserDetails({
      name: "Nam",
      age: 24
    })
  }

  console.log('re-render');

  return (
    <UserDetailsContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <button onClick={handleClick}>Change User</button>
      <ChildComponent />     
    </UserDetailsContext.Provider>
  )
}