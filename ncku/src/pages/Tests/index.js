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

function Tests() {

  const location = useLocation();
  console.log(location.state.data.ThreadGroups.length)

  // TODO: Error handling
  const tg = location.state.data.ThreadGroups;
  const tg_length = location.state.data.ThreadGroups.length;
  

  return (
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

      {/* Uses loop to create multiple Load Config Components */}
      { tg_length ? 
      tg.map((data, index) =>
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
      // TODO: No thread groups
      <React.Fragment>ERROR</React.Fragment>
      }
    </Container>
  )
}

export default Tests;