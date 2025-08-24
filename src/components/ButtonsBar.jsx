export default function ButtonsBar({setDisplayStatus}) {
    return (
        <div>
            <button onClick={()=> {setDisplayStatus(false)}}>Edit</button>
            <button>Download</button>
        </div>
    )
}