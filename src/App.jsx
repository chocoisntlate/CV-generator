import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GeneralSection from './components/GeneralSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form></Form>
    </>
  )
}

export default App
