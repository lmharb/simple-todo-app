import React from "react"
import useToggle from "./hooks/useToggle"

const CounterHook = () => {
  const [isApple, toggleApple] = useToggle(true)

  return (
    <div style={{ fontSize: "5rem", cursor: "pointer" }} onClick={toggleApple}>
      {isApple ? "🍎" : "🍊"}
    </div>
  )
}

export default CounterHook
