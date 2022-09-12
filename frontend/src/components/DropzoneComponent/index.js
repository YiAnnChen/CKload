import React, {
  useCallback,
  useState,
} from 'react'

import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import axios from 'axios'

import './styles.css'

const Container = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  margin: 2.5rem 2rem 2.5rem auto;
  padding: 20px;
  // border-color: #c60021;
  border-style: solid;
  border-radius: 20px;
  // -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  // -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  // box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  outline: none;
  cursor: ${props => props.uploadState ? "default" : "pointer"};

  border-color: white;
  color: #3d6098;
  background-color: white;
  box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
`

const UploadImg = styled.img`
  height: 10%;
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
    <React.Fragment>
      {isFileUploaded
        // Display this after file is uploaded
        ?
        <Container uploadState={isFileUploaded}>
          <React.Fragment>Filename: {filename}</React.Fragment>
        </Container>
        // Display this before file is uploaded
        : <Container uploadState={isFileUploaded} {...getRootProps({})}>
          <input {...getInputProps()} />
          {/* Test */}
          <div className='drop-text'>
            {/* <UploadImg src={} alt='Upload Image' /> */}
            <h4>Drag and drop JMX file here</h4>
            <h4>-OR-</h4>
            <h4>Click to browse</h4>
          </div>
        </Container>
      }
    </React.Fragment>
  );
}

export default DropzoneComponent;