import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import MyDocument from './components/Resume'
import { PDFViewer } from '@react-pdf/renderer';
import ButtonsBar from './components/ButtonsBar';

function App() {
  const [displayResume, setDisplayStatus] = useState(false)
  const [resumeInputs, setResumeInputs] = useState([{}, [["","","",""]], [["","","",""]]])

  return (
    <>
      {!displayResume && 
        <Form onSubmit={(inputs) => {
          setResumeInputs(inputs)
          setDisplayStatus(true)
          }}
          initialInputs={resumeInputs}
        />
      }
      {displayResume &&
      <div>
        <ButtonsBar setDisplayStatus={setDisplayStatus}/>
        <PDFViewer id="pdfviewer">
          <MyDocument inputs={resumeInputs}></MyDocument>
        </PDFViewer>
      </div>
      }
    </>
  )
}

export default App
