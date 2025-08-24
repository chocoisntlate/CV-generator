import SchoolFields from "./SchoolFields";
import { useState } from "react";

export default function EducationSection({inputs, handleChange, addSchoolUpdate, removeSchoolUpdate}) {

    const [schools, setSchools] = useState(inputs.map((_)=>{}))


    const addSchool = (e) => {
        e.preventDefault()
        addSchoolUpdate()
        setSchools([...schools, {}])
    }

    const removeSchool = (e) => {
        e.preventDefault()
        if (!(schools.length === 1)) {
            setSchools(schools.slice(0,-1))
            removeSchoolUpdate()
        }
    }


    return (
        <div>
            <div className="section-heading">Education</div>
            {schools.map((_, index) => {
                return <SchoolFields inputs={inputs} handleChange={handleChange} index={index} key={index}></SchoolFields>
            })}
            <div className="form-buttons">
                <button onClick={addSchool}>Add School</button>
                <button onClick={removeSchool}>Remove School</button>

            </div>
            
        </div>
    )
}