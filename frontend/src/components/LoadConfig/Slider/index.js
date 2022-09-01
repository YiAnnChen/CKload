import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import './styles.css'

const sliderThumbStyles = (props) => (`
  width: 1.2rem;
  height: 1.25rem;
  background: #fff;
  cursor: pointer;
  box-shadow: rgba(0, 9, 70, 0.4) 1px 4px 8px 0px;
  border-color: light-gray;
  border-radius: 50%;
`);

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
  background: linear-gradient(to right, #0e5cd9 0%, #0e5cd9 ${props => props.theme.progressPercent}%, #fff ${props => props.theme.progressPercent}%, #fff 100%);
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
    console.log(percentage)
    e.target.style.background = 'linear-gradient(to right, #0e5cd9 0%, #0e5cd9 ' + percentage
      + '%, #fff ' + percentage + '%, #fff 100%)'
  }


  return (
    <>
      <div>{props.sliderName}</div>
      <Styles>
        <InputRange
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
    </>
  );

}

export default Slider;