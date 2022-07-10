import React from 'react';
import styled from 'styled-components';

import DropzoneComponent from '../../components/DropzoneComponent';
import LoadConfig from '../../components/LoadConfig'

const Container = styled.div`
  margin-top: 2rem;
`

const Tests = () => {
  return (
    <>
      <Container>
        <DropzoneComponent />
        <LoadConfig name='testname1'/>
        <LoadConfig name='testname2'/>
        <LoadConfig name='testname3'/>
      </Container>
    </>
  )
}

export default Tests;