import { PDFDownloadLink } from "@react-pdf/renderer"

export default function ButtonsBar({setDisplayStatus, children}) {
    return (
        <div className="buttons-bar">
            <button onClick={()=> {setDisplayStatus(false)}}>Edit</button>
            <PDFDownloadLink document={children} fileName="resume.pdf">
                {({ loading }) =>
                    loading ? null : <button>Download</button>
                }

            </PDFDownloadLink>
        </div>
    )
}