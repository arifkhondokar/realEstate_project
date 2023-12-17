import { useState } from 'react'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Service/>
      <Contact/>
    </>
  )
}

export default App
