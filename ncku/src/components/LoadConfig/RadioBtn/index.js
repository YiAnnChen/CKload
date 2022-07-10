import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

function RadioBtn(props) {
  return(
    <>
      <input type="radio" value={props.value} checked={props.currentValue === props.value} onChange={props.handler}/>
      <Label className="radioText">{props.text}</Label>
    </>
  );
}

export default RadioBtn;