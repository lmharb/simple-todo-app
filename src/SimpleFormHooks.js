import React, { useState } from "react"
import useFormState from "./hooks/useInputState"

const SimpleFormHooks = () => {
  const [email, updateEmail, resetEmail] = useFormState("")

  return (
    <div>
      <h1>The value is :{email}</h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset Email</button>
    </div>
  )
}

export default SimpleFormHooks
