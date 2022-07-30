import React, {useState} from "react";
import styled from 'styled-components';

import Checkbox from "./Checkbox";
import RadioBtn from "./RadioBtn"
import Slider from './Slider'
import './index.css'

const Container = styled.div`
  display: absolute;
  margin: auto auto 2rem auto;
  width: 60%;
  padding: 20px;
  align-items: center;
  // -webkit-box-shadow: 0px 5px 33px -21px #891919;
  // -moz-box-shadow: 0px 5px 33px -21px #891919;
  // box-shadow: 0px 5px 33px -21px #891919;
  box-shadow: rgba(0, 9, 61, 0.2) 0px 4px 8px 0px;
`

function LoadConfig(props) {

  // States
  const [samplerValue, setSamplerValue] = useState("continue");

  function handleOnRadioChange(e) {
    setSamplerValue(e.target.value);
  };

  return(
    <>
      <Container className="box border-img">
        <ul>
        <div className="title">Load Configuration - {props.name}</div>
        <Slider sliderName="Users" min={20} max={200} step={20} value={20}/>
        <Slider sliderName="Ramp-up period (seconds)" value={0}/>
        <Slider sliderName="Loop Count" value={0}/>
        <Checkbox checkboxName="Same user on each iteration" type="checkbox"/>
        <Checkbox checkboxName="Delay Thread creation until needed" type="checkbox"/>
        
        </ul>
        <ul>
        <Checkbox checkboxName="Specify Thread lifetime" name="isUserIteration" type="checkbox"/>
        <Slider sliderName="Duration (seconds)" value={0}/>
        <Slider sliderName="Startup delay (seconds)" value={0}/>
        <>
          <>Action to take after a Sampler error:</>
          <div>
            <RadioBtn value="continue" currentValue={samplerValue} text="Continue" handler={handleOnRadioChange}/>
            <RadioBtn value="startNextThread" currentValue={samplerValue} text="Start Next Thread Loop" handler={handleOnRadioChange}/>
            <RadioBtn value="stopThread" currentValue={samplerValue} text="Stop Thread" handler={handleOnRadioChange}/>
            <RadioBtn value="stopTest" currentValue={samplerValue} text="Stop Test" handler={handleOnRadioChange}/>
            <RadioBtn value="stopTestForce" currentValue={samplerValue} text="Stop Test Now" handler={handleOnRadioChange}/>
          </div>
        </>
        </ul>
      </Container>
    </>
  );
}

export default LoadConfig;