import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import MyDocument from './components/Resume'
import { PDFViewer } from '@react-pdf/renderer';

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
      {displayResume &&
        <PDFViewer id="pdfviewer">
          <MyDocument inputs={resumeInputs}></MyDocument>
        </PDFViewer>
      }
    </>
  )
}

export default App
