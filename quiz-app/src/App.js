import React from "react"
import Home from "./components/Home"

export default function App() {
  const [lightMode, setLightMode] = React.useState(false)

  function toggleLightMode() {
    setLightMode(prevMode => !prevMode)
  }

  return (
      <div>
          <Home 
          lightMode={lightMode}
          toggleLightMode={toggleLightMode}
          />
      </div>
  )
}



