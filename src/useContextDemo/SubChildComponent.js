import React, { useContext } from "react";
import { UserDetailsContext } from "./UserDetailsComponent";

export default function SubChildComponent() {
  console.log('Subchild re-render');

  const userDetails = useContext(UserDetailsContext)
  
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User name: {userDetails.name}</h4>
      <h4>User age: {userDetails.age}</h4>
    </div>
  )
}