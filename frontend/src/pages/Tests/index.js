import React from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';

import DropzoneComponent from '../../components/DropzoneComponent';
import LoadConfig from '../../components/LoadConfig'

import './index.css'

const Container = styled.div`
  justify-content: center;
  padding: 1rem;
`

const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
`

const TestAttrContainer = styled.div`
  display: flex;
  justify-content: center;
`

function Tests() {

  const location = useLocation();

  let tg = {
    object: null,
    length: 0,
  };

  if (location.state !== null) {
    tg.object = location.state.data.ThreadGroups;
    tg.length = location.state.data.ThreadGroups.length;
  }

  return (
    <Container>
      {/* <div className='align-column-container'> */}

      <DropzoneContainer>
        <DropzoneComponent />
      </DropzoneContainer>

      <TestAttrContainer>
        <button className='test-btns'>Save</button>
        <button className='test-btns'>Save & Run</button>
      </TestAttrContainer>

      {/* <div className='test-attr'>
          <div className='test-name'>
            <div className='test-name-border'>10_July_2022_21:56&nbsp;✎</div>
          </div>
          <div className='test-btns-list'>
            <button className='test-btns'>Save</button>
            <button className='test-btns'>Save & Run</button>
          </div>
        </div> */}
      {/* </div> */}

      {/* Uses loop to create multiple Load Config Components */}
      {tg.length ?
        tg.object.map((data, index) =>
          <LoadConfig key={index}
            name='threadgroup'
            users={data.num_threads}
            ramp_time={data.ramp_time}
            duration={data.duration}
            delay={data.delay}
            on_sampler_error={data.on_sampler_error}
            //  Boolean values
            same_user_on_next_iteration={data.same_user_on_next_iteration}
            scheduler={data.scheduler}
            delayed_start={data.delayed_start}
          />
        )
        :
        /* If can't find data (tg.length === 0), uses default values for display */
        <LoadConfig
          name='threadgroup'
          users={20}
          ramp_time={10}
          duration={60}
          delay={5}
          on_sampler_error={"continue"}
          //  Boolean values
          same_user_on_next_iteration={true}
          scheduler={true}
          delayed_start={true}
        />
      }
    </Container>
  )
}

export default Tests;