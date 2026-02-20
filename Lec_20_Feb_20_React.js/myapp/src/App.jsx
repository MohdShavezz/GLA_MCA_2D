import { useState } from 'react'
import Counter from './Counter'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {show&& <Counter/>}
      <button onClick={()=>setShow(false)}>HIDE</button>
    </>
  )
}

export default App
