import React, 
{
  useCallback,
  useState,
} from 'react'

import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'
import axios from 'axios'

// // Redux for handling passing frontend/backend values
// import { configureStore } from '@reduxjs/toolkit'

// // 1. Create a basic Reducer
// const rootReducer = ( currentState = 0, action ) => { 
//   return currentState;
// };

// // 2. Create a store
// const store = configureStore({ reducer: rootReducer });

// console.log(store.getState());

const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  margin: auto;
  padding: 20px;
  border-color: #c60021;;
  border-style: solid;
  border-radius: 20px;
  -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  outline: none;
  cursor: ${props => props.uploadState ? "default" : "pointer"};
`

const instance = axios.create({
  baseURL: 'https://localhost:8080/api',
  timeout: 1000,
  headers:{
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  }
});

function DropzoneComponent(props) {

  // State to store uploaded file
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
      .post("http://localhost:8080/api/upload/jmx", file)
      .then(function (response) {
        console.log();
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
    <>
      { isFileUploaded   
        // Display this after file is uploaded
        ? <>
        <Container uploadState={isFileUploaded}>
          <>Filename: {filename}</>
        </Container>
        </>
        // Display this before file is uploaded
        : <Container uploadState={isFileUploaded} {...getRootProps({})}>
            <input {...getInputProps()} />
            <>Drag and drop jmx file</>
          </Container>
      }
    </>
  );
}

export default DropzoneComponent;