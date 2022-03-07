import React from "react";
import SubChildComponent from "./SubChildComponent";

export default function ChildComponent() {
  console.log('child re-render');
    
  return (
    <div>
      <h2>This is Child Component</h2>
      <SubChildComponent />     
    </div>
  )
}