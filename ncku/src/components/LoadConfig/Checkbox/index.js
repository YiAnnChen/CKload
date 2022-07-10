import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex; // changes the size of the slider bar
  align-items: center;
  color: #000;
  margin-bottom: 1rem;

  .nameLabel {
    margin-left: 0.5rem;
  }
`;

function Checkbox(props) {

  return(
    <>
        
        <Styles>
          <input type="checkbox"/>
          <div className="nameLabel">{props.checkboxName}</div>
        </Styles>
    </>
  );
}

export default Checkbox;