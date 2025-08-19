import ExperienceFields from "./ExperienceFields";
import { useState } from "react";

export default function ExperienceSection({inputs, handleChange, addExperienceUpdate, removeExperienceUpdate}) {

    const [experiences, setExperiences] = useState([{}])


    const addExperience = (e) => {
        e.preventDefault()
        addExperienceUpdate()
        setExperiences([...experiences, {}])
    }

    const removeExperience = (e) => {
        e.preventDefault()
        removeExperienceUpdate()
        setExperiences(experiences.slice(0,-1))
    }


    return (
        <div>
            <div className="section-heading">Experience</div>
            {experiences.map((_, index) => {
                return <ExperienceFields inputs={inputs} handleChange={handleChange} index={index} key={index}></ExperienceFields>
            })}
            <button onClick={addExperience}>Add another Experience</button>
            <button onClick={removeExperience}>Remove Experience</button>
            
        </div>
    )
}