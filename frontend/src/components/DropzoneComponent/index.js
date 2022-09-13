import React, {
  useCallback,
  useState,
} from 'react'

import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import axios from 'axios'

import uploadImg from './../../imgs/upload.png'
import './styles.css'

const Container = styled.div`
  height: 220px;
  width: 800px;
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
  margin: 20px 0 20px 0;
  border-style: solid;
  border-radius: 20px;
  border-color: #0e5cd9;
  outline: 0.5px dashed #0e5cd9;
  outline-offset: -10px;
  // cursor: ${props => props.uploadState ? "default" : "pointer"};


  color: #3d6098;

  // Hex: #eaf2ff
  background-color: rgba(234,242,255,0.5);
`

const instance = axios.create({
  baseURL: 'https://localhost:8080/api',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  }
});

function DropzoneComponent(props) {

  // Checks if file is uploaded, initially set to false
  const [isFileUploaded, setFileUploaded] = useState(false);

  // Handles file upload event and updates state
  /*function handleUpload() {
    

    // Add code here to upload file to server
    // ...
    console.log(isFileUploaded);
  }*/


  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      /* When JMX file is accepted sets upload state to true */
      setFileUploaded(true);

      /* Reads the uploaded file */
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsText(file)

      /* Send jmx file to backend */
      axios
        .post("http://localhost:8000/api/upload/jmx", file)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

    })
  });

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    noKeyboard: true,
    accept: {
      'text/jmx': ['.jmx']
    }
  });

  const filename = acceptedFiles.map(file => (
    <div key={file.path}>
      {file.path}
    </div>
  ));

  return (
    <div>
      {isFileUploaded
        // Display this after file is uploaded
        ?
        <Container uploadState={isFileUploaded}>
          <React.Fragment>Filename: {filename}</React.Fragment>
        </Container>
        // Display this before file is uploaded
        : <Container uploadState={isFileUploaded}>
          <div className='drop-text'>
            <img className='img-upload' src={uploadImg} alt="Upload img" />
            <h3>Drag and drop your file here</h3>
            <h4>or</h4>
            <button className='button-upload' {...getRootProps({})}>
              <input {...getInputProps()} />
              <h3>UPLOAD FILE</h3>
            </button>
            <h4>(jmx)</h4>
          </div>
        </Container>
      }
    </div>
  );
}

export default DropzoneComponent;