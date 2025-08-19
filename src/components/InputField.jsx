

export default function InputField({ title = "Unnamed", value, handleChange}) {
    return (
        <div>
            <label>{title}</label>
            <input onChange={handleChange} value={value ?? ""} name={title}></input>
        </div>
    )
}