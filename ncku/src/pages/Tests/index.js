import React, {useState} from 'react';
import styled from 'styled-components';

import DropzoneComponent from '../../components/DropzoneComponent';
import LoadConfig from '../../components/LoadConfig'

import './index.css'

import mockData from '../../mock-data.json'

const Container = styled.div`
  justify-content: center;
  padding: 1rem;
`

const Tests = () => {

  const [testData, setTestData] = useState(mockData);

  return (
    <>
      <Container>
        <div className='align-column-container'>
          <DropzoneComponent />
          <div className='test-attr'>
            <div className='test-name'>
              {/* Change Jmeter Test 1 to date */}
              <div className='test-name-border'>10_July_2022_21:56&nbsp;✎</div>
            </div>
            <div className='test-btns-list'>
              <button className='test-btns'>Save</button>
              <></>
              <button className='test-btns'>Save & Run</button>
            </div>
          </div>
        </div>

        {/* TODO: Use a for loop to create Loadconfigs */}
        { 

        }

        <LoadConfig name='threadgroup1'/>
        <LoadConfig name='threadgroup2'/>
        <LoadConfig name='threadgroup3'/>
      </Container>
    </>
  )
}

export default Tests;