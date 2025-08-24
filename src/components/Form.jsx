import { useState } from "react";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import GeneralSection from "./GeneralSection";
import styles from "../styles/form.module.css"

export function Form({onSubmit, initialInputs}) {
    const [generalInputs, setGeneralInputs] = useState(initialInputs[0])
    const [educationInputs, setEducationInputs] = useState(initialInputs[1])
    const [experienceInputs, setExperienceInputs] = useState(initialInputs[2])


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

    // probably could not repeat code but whatever

    const handleExperienceChange = (index, field, value) => {
        const updated = [...experienceInputs]
        updated[index][field] = value
        setExperienceInputs(updated)
    }

    const addExperienceUpdate = () => {
        const updated = [...experienceInputs, ["","","",""]]
        setExperienceInputs(updated)
    }

    const removeExperienceUpdate = () => {
        const updated = experienceInputs.slice(0, experienceInputs.length-1)
        setExperienceInputs(updated)
    }

    const submitForm = () => {
        onSubmit([generalInputs, educationInputs, experienceInputs])
    }

    return (
        <form action={submitForm}>
            <GeneralSection handleChange={handleChange} inputs={generalInputs}></GeneralSection>
            <EducationSection
                removeSchoolUpdate={removeSchoolUpdate}
                addSchoolUpdate={addSchoolUpdate}
                handleChange={handleEducationChange}
                inputs={educationInputs}
            />
            <ExperienceSection
                removeExperienceUpdate={removeExperienceUpdate} 
                addExperienceUpdate={addExperienceUpdate} 
                handleChange={handleExperienceChange}
                inputs={experienceInputs}
            />
            <button className={styles.button} type="submit">Submit</button>
        </form>
    )
}

export function FormHeader() {
    return (
        <div className="form-header">CV Generator</div>
    )
}