import SchoolFields from "./SchoolFields";
import { useState } from "react";

export default function EducationSection({inputs, handleChange, addSchoolUpdate, removeSchoolUpdate}) {

    const [schools, setSchools] = useState([{}])


    const addSchool = (e) => {
        e.preventDefault()
        addSchoolUpdate()
        setSchools([...schools, {}])
    }

    const removeSchool = (e) => {
        setSchools(schools.slice(0,-1))
        removeSchoolUpdate()
        e.preventDefault()
    }


    return (
        <div>
            <div className="section-heading">Education</div>
            {schools.map((_, index) => {
                return <SchoolFields inputs={inputs} handleChange={handleChange} index={index} key={index}></SchoolFields>
            })}
            <button onClick={addSchool}>Add another school</button>
            <button onClick={removeSchool}>Remove school</button>
            
        </div>
    )
}