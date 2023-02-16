import { useState } from "react"
import axios from "axios"
const JWT = `Bearer PASTE_YOUR_JWT`

export async function FileUpload() {

    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmission = async () => {

        const formData = new FormData();

        formData.append('file', selectedFile)

        const metadata = JSON.stringify({
            name: 'File name',
        });
        formData.append('pinataMetadata', metadata);

        const options = JSON.stringify({
            cidVersion: 0,
        })
        formData.append('pinataOptions', options);

        try {
            const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
                maxBodyLength: "Infinity",
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                    Authorization: JWT
                }
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <label class="form-label">Choose File</label>
            <input type="file" onChange={changeHandler} />
            <button onClick={handleSubmission}>Submit</button>
        </>
    )
}

