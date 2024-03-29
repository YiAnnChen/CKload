import React, { useState } from "react";
import styled from 'styled-components';

import Checkbox from "./Checkbox";
import RadioBtn from "./RadioBtn"
import Slider from './Slider'
import './index.css'

const Container = styled.div`
  display: absolute;
  margin: 2rem auto 2rem auto;
  width: 50%;
  padding: 20px;
  align-items: center;
  box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
`

function LoadConfig(props) {

  // Holds the sampler value, initial state is passed in with props
  const [samplerValue, setSamplerValue] = useState(props.on_sampler_error);

  // A boolean that determine if "Duration" and "Startup delay" is enabled
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
        <Slider sliderName="Ramp-up period (seconds)" value={props.ramp_time} min={0} max={100} isEnabled={true} />
        <Slider sliderName="Loop Count" value={0} min={0} max={100} isEnabled={true} />
        <Checkbox checkboxName="Same user on each iteration" type="checkbox" checked={props.same_user_on_next_iteration} />
        <Checkbox checkboxName="Delay Thread creation until needed" type="checkbox" checked={props.delayed_start} />
      </ul>
      <ul>
        <Checkbox checkboxName="Specify Thread lifetime" name="isUserIteration" type="checkbox" checked={schedulerVal} onChange={handleScheduler} />
        <Slider sliderName="Duration (seconds)" value={props.duration} min={0} max={100} isEnabled={schedulerVal} />
        <Slider sliderName="Startup delay (seconds)" value={props.delay} min={0} max={100} isEnabled={schedulerVal} />
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