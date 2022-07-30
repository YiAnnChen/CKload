import React, {useState} from 'react';
import styled from 'styled-components';

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
    margin-left: 1rem;
    padding: 0 1rem;
    flex: 1;
    font-size: 1.25rem;
  }

  .slider {
    flex: 1; // changes the size of the slider bar
    -webkit-appearance: none;
    width: 100%;
    height: 0.75rem;
    border-radius: 0.5rem;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

const InputRange = styled.input`
  flex: 1; // length of the slider bar

`

function Slider(props) {

  // States
  const [value, setValue] = useState(props.value);

  function handleOnChange(e) {
    setValue(e.target.value)
  }

  return(
    <>
        <div>{props.sliderName}</div>
        <Styles>
          {/* <input type="range" min={props.min} max={props.max} step={props.step} value={value} className="slider" onChange={handleOnChange} /> */}
          {/* <InputRange type="range" min={props.min} max={props.max} step={props.step} value={value} onChange={handleOnChange}/> */}
          <input type='range' className='load-config-slider' min={props.min} max={props.max} step={props.step} value={value} onChange={handleOnChange}/>
          <div className="value">{value}</div>
        </Styles>
    </>
  );
}

export default Slider;