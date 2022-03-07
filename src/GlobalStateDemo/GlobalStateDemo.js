import React from "react";
import { StoreProvider } from './store'
import Demo from './Demo'

export default function GlobalStateDemo() {
  return (
    <StoreProvider>
      <Demo />
    </StoreProvider>   
  )
}