import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import './styles.css'


const Styles = styled.div`
  display: flex; 
  align-items: center;
  color: #888;
  margin-bottom: 1rem;

  .value {
    display: absolute;
    width: 4rem;
    margin-left: 1rem;
    margin-right: 5rem;
    padding: 0.25rem;
    font-size: 1.1rem;
    // TODO: add transition for better looking UI
  }

  .value:hover {
    border-color: #3d6098;
  }

  .value:focus {
    border-color: #3d6098;
    outline: none;
  }
`;

const InputRange = styled.input`
  flex: 1; // length of the slider bar
  -webkit-appearance: none;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #0e5cd9 0%, #0e5cd9 ${props => props.theme.progressPercent}%, #ececec ${props => props.theme.progressPercent}%, #ececec 100%);
  transition: background 450ms ease-in;
  height: 0.75rem;

  &:hover {
    -webkit-appearance: none;
  }

  // Chrome, Safari, Opera

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #3d6098;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer 
  }

  // Firefox

  &::-moz-range-thumb {
    -webkit-appearance: none;
    background-color: #3d6098;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer
  }

  &::-moz-range-progress {
    background-color: #0e5cd9;
    height: 0.75rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &::-moz-range-track {

  }

  // Internet Explorer

`

function Slider(props) {

  // States
  const [value, setValue] = useState(props.value);
  const inputRangeRef = useRef(null);

  // We are passing a default value for InputRange
  InputRange.defaultProps = {
    theme: {
      progressPercent: ((props.value - props.min) / (props.max - props.min)) * 100
    }
  }

  function handleOnChange(e) {
    setValue(e.target.value)

    let percentage = ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100

    // Chrome, Safari, Opera, Firefox, IE
    inputRangeRef.current.style.background = 'linear-gradient(to right, #0e5cd9 0%, #0e5cd9 '
      + percentage + '%, #ececec ' + percentage + '%, #ececec 100%)';
  }


  return (
    <React.Fragment>
      <div>{props.sliderName}</div>
      <Styles>
        <InputRange
          ref={inputRangeRef}
          className='load-config-slider'
          type='range'
          min={props.min}
          max={props.max}
          step={props.step}
          value={value}
          onChange={handleOnChange}
          disabled={!props.isEnabled}
        />

        <input
          className='value'
          type='number'
          min={props.min}
          max={props.max}
          step={props.step}
          value={value}
          onChange={handleOnChange}
        />
      </Styles>
    </React.Fragment>
  );

}

export default Slider;