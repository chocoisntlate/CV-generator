import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GeneralSection from './components/GeneralSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Form from './components/Form'
import Resume from './components/Resume'

function App() {
  const [displayResume, setDisplayStatus] = useState(false)
  const [resumeInputs, setResumeInputs] = useState([])

  return (
    <>
      {!displayResume && 
        <Form onSubmit={(inputs) => {
          setResumeInputs(inputs)
          setDisplayStatus(true)
          console.log(inputs)
          }}
        />
      }
      {displayResume && <Resume inputs={resumeInputs}></Resume>}
    </>
  )
}

export default App
