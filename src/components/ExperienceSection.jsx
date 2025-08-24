import ExperienceFields from "./ExperienceFields";
import { useState } from "react";

export default function ExperienceSection({inputs, handleChange, addExperienceUpdate, removeExperienceUpdate}) {

    const [experiences, setExperiences] = useState(inputs.map((_)=>{}))


    const addExperience = (e) => {
        e.preventDefault()
        addExperienceUpdate()
        setExperiences([...experiences, {}])
    }

    const removeExperience = (e) => {
        
        e.preventDefault()
        if (!(experiences.length === 1)) {

            removeExperienceUpdate()
            setExperiences(experiences.slice(0,-1))
        }
    }


    return (
        <div>
            <div className="section-heading">Experience</div>
            {experiences.map((_, index) => {
                return <ExperienceFields inputs={inputs} handleChange={handleChange} index={index} key={index}></ExperienceFields>
            })}
            <div className="form-buttons">
                <button onClick={addExperience}>Add Experience</button>
                <button onClick={removeExperience}>Remove Experience</button>
            </div>
            
        </div>
    )
}