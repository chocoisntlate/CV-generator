import InputField from "./InputField";

export default function GeneralSection({handleChange, inputs={}}) {


    return (
        <div>
            <div className="section-heading">General Information</div>
            <InputField handleChange={handleChange} title="First Name" value={inputs["First Name"]}></InputField>
            <InputField handleChange={handleChange} title="Last Name" value={inputs["Last Name"]}></InputField>
            <InputField handleChange={handleChange} title="Email Address" value={inputs["Email Address"]}></InputField>
        </div>
    )
}