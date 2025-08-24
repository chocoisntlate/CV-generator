

export default function InputField({ title = "Unnamed", value, handleChange}) {
    return (
        <div className="label-input">
            <label>{title}</label>
            <input onChange={handleChange} value={value ?? ""} name={title}></input>
        </div>
    )
}