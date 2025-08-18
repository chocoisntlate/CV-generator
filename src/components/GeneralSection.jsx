import InputField from "./InputField";

export default function GeneralSection() {


    return (
        <div>
            <div className="section-heading">General Information</div>
            <InputField title="First Name"></InputField>
            <InputField title="Last Name"></InputField>
            <InputField title="Email Address"></InputField>
        </div>
    )
}