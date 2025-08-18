import InputField from "./InputField";
import SchoolFields from "./SchoolFields";
import { useState } from "react";

export default function EducationSection() {

    const [schools, setSchools] = useState([{}])


    const addSchool = () => {
        setSchools([...schools, {}])
    }

    const removeSchool = () => {
        setSchools(schools.slice(0,-1))
    }


    return (
        <div>
            <div className="section-heading">Education</div>
            {schools.map((_, index) => {
                return <SchoolFields key={index}></SchoolFields>
            })}
            <button onClick={addSchool}>Add another school</button>
            <button onClick={removeSchool}>Remove school</button>
            
        </div>
    )
}