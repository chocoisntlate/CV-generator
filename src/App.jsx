import { useState } from 'react'
import './App.css'

import {Form, FormHeader} from './components/Form'
import MyDocument from './components/Resume'
import { PDFViewer } from '@react-pdf/renderer';
import ButtonsBar from './components/ButtonsBar';
import ReactPDF from '@react-pdf/renderer';


function App() {
  const [displayResume, setDisplayStatus] = useState(false)
  const [resumeInputs, setResumeInputs] = useState([{}, [["","","",""]], [["","","",""]]])

  return (
    <>
      <FormHeader></FormHeader>
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
        <ButtonsBar setDisplayStatus={setDisplayStatus}>
          <MyDocument inputs={resumeInputs} />
        </ButtonsBar>
        <PDFViewer id="pdfviewer">
          <MyDocument inputs={resumeInputs} />
        </PDFViewer>
      </div>
      }
    </>
  )
}

export default App
