import React, { useState } from 'react'

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
        {isVisible && <p>Hello Dileep, a very good morning!</p>}
        <button onClick={()=>setIsVisible(prev => !prev)}>{isVisible ? 'Hide' : 'Show'}</button>
    </div>
  )
}
