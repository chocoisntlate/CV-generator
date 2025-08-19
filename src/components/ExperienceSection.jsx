import ExperienceFields from "./ExperienceFields";
import { useState } from "react";

export default function ExperienceSection() {

    const [experiences, setExperiences] = useState([{}])


    const addExperience = () => {
        setExperiences([...experiences, {}])
    }

    const removeExperience = () => {
        setExperiences(experiences.slice(0,-1))
    }


    return (
        <div>
            <div className="section-heading">Experience</div>
            {experiences.map((_, index) => {
                return <ExperienceFields key={index}></ExperienceFields>
            })}
            <button onClick={addExperience}>Add another Experience</button>
            <button onClick={removeExperience}>Remove Experience</button>
            
        </div>
    )
}