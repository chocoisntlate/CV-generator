import InputField from "./InputField"

export default function ExperienceFields({index, inputs, handleChange}) {
    return (
        <div>
            <InputField value={inputs[index][0]} handleChange={(e) => handleChange(index, 0, e.target.value)} title="Company Name"></InputField>
            <InputField value={inputs[index][1]} handleChange={(e) => handleChange(index, 1, e.target.value)} title="Title of Role"></InputField>
            <InputField value={inputs[index][2]} handleChange={(e) => handleChange(index, 2, e.target.value)} title="Start Date"></InputField>
            <InputField value={inputs[index][3]} handleChange={(e) => handleChange(index, 3, e.target.value)} title="End Date"></InputField>
        </div>
    )
}