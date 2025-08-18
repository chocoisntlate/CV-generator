import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GeneralSection from './components/GeneralSection'
import InputField from './components/InputField'
import EducationSection from './components/EducationSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeneralSection></GeneralSection>
      <EducationSection></EducationSection>
    </>
  )
}

export default App
