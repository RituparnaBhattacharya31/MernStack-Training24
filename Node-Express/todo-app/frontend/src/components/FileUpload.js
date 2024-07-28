import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FileUpload() {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);

    const backend_endpoint = process.env.REACT_APP_BACKEND_ENDPOINT;

    useEffect(() => {
        fetchFiles();
    }, [])

    const fetchFiles = () => {
        axios.get(`${backend_endpoint}/downloadFiles`).then((res) => {
            setFiles(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    const handleFileUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("myFile", file);
        axios.post(`${backend_endpoint}/uploadFile`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            alert(`${res.data.filename} is uploaded successfully`)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <h2>File upload</h2>
            <form onSubmit={handleFileUpload}>
                <input name='myFile' type='file' onChange={(e) => {
                    console.log(e.target.files[0])
                    setFile(e.target.files[0])
                }} />
                <button type="submit">Upload</button>
            </form>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Filename</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {files.length > 0 &&
                        files.map((file, index) => (
                            <tr key={index}>
                                <td>{file}</td>
                                <td>
                                    <a href={`http://localhost:5000/${file}`} download>
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FileUpload