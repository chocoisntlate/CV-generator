

export default function InputField({ title = "Unnamed" }) {
    return (
        <div>
            <label>{title}</label>
            <input id={title}></input>
        </div>
    )
}