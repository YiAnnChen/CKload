import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Checkbox from "./Checkbox";
import RadioBtn from "./RadioBtn"
import Slider from './Slider'
import './index.css'

const Container = styled.div`
  display: absolute;
  margin: auto auto 2rem auto;
  width: 50%;
  padding: 20px;
  align-items: center;
  // -webkit-box-shadow: 0px 5px 33px -21px #891919;
  // -moz-box-shadow: 0px 5px 33px -21px #891919;
  // box-shadow: 0px 5px 33px -21px #891919;
  box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
`

function LoadConfig(props) {

  // States
  const [samplerValue, setSamplerValue] = useState(props.on_sampler_error);
  const [schedulerVal, setSchedulerVal] = useState(props.scheduler);

  // Handler functions
  function handleOnRadioChange(e) {
    setSamplerValue(e.target.value);
  };

  function handleScheduler() {
    setSchedulerVal(!schedulerVal);
  }

  return (
    <Container className="box border-img">
      <ul>
        <div className="title">Load Configuration - {props.name}</div>
        <Slider sliderName="Users" min={20} max={200} step={20} value={props.users} isEnabled={true} />
        <Slider sliderName="Ramp-up period (seconds)" value={props.ramp_time} isEnabled={true} />
        <Slider sliderName="Loop Count" value={0} isEnabled={true} />
        <Checkbox checkboxName="Same user on each iteration" type="checkbox" checked={props.same_user_on_next_iteration} />
        <Checkbox checkboxName="Delay Thread creation until needed" type="checkbox" checked={props.delayed_start} />
      </ul>
      <ul>
        <Checkbox checkboxName="Specify Thread lifetime" name="isUserIteration" type="checkbox" checked={schedulerVal} onChange={handleScheduler} />
        <Slider sliderName="Duration (seconds)" value={props.duration} isEnabled={schedulerVal} />
        <Slider sliderName="Startup delay (seconds)" value={props.delay} isEnabled={schedulerVal} />
        <React.Fragment>
          <React.Fragment>Action to take after a Sampler error:</React.Fragment>
          <div>
            <RadioBtn value="continue" currentValue={samplerValue} text="Continue" handler={handleOnRadioChange} />
            <RadioBtn value="start_next_thread_loop" currentValue={samplerValue} text="Start Next Thread Loop" handler={handleOnRadioChange} />
            <RadioBtn value="stop_thread" currentValue={samplerValue} text="Stop Thread" handler={handleOnRadioChange} />
            <RadioBtn value="stop_test" currentValue={samplerValue} text="Stop Test" handler={handleOnRadioChange} />
            <RadioBtn value="stop_test_now" currentValue={samplerValue} text="Stop Test Now" handler={handleOnRadioChange} />
          </div>
        </React.Fragment>
      </ul>
    </Container>
  );

}

export default LoadConfig;