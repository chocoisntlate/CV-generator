import { useState } from "react";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import GeneralSection from "./GeneralSection";

export default function Form() {
    const [generalInputs, setGeneralInputs] = useState({})
    const [educationInputs, setEducationInputs] = useState([["","","",""]])
    const [experienceInputs, setExperienceInputs] = useState([{}])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setGeneralInputs(values => ({...values, [name]: value}))
    }

    const handleEducationChange = (index, field, value) => {
        const updated = [...educationInputs]
        updated[index][field] = value
        setEducationInputs(updated)
    }

    const addSchoolUpdate = () => {
        const updated = [...educationInputs, ["","","",""]]
        setEducationInputs(updated)
    }

    const removeSchoolUpdate = () => {
        const updated = educationInputs.slice(0, educationInputs.length-1)
        setEducationInputs(updated)
    }

    return (
        <form>
            <GeneralSection handleChange={handleChange} inputs={generalInputs}></GeneralSection>
            <EducationSection removeSchoolUpdate={removeSchoolUpdate} addSchoolUpdate={addSchoolUpdate} handleChange={handleEducationChange} inputs={educationInputs}></EducationSection>
            <ExperienceSection handleChange={handleChange}></ExperienceSection>
            <button type="submit">Submit</button>
        </form>
    )
}