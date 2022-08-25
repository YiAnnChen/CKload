import "./intro.css"
import React, { Component }  from 'react';
import ReactPlayer from "react-player/youtube";
const Intro = () =>{
    return(
        <div  className="home">
      
        <div className="home-left">
        <div className="home-left-wrapper">
          <h2 className="home-intro">Welcome, The website is</h2>
          <h1 className="home-name">CK-Load</h1>
          <h1 className="home-name1">成大壓力測試雲</h1>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-item">NCKU</div>
              <div className="home-title-item">Website Pressure</div>
              <div className="home-title-item">TEST</div>
              <div className="home-title-item">Sideex</div>
              <div className="home-title-item">TRY</div>
            </div>
          </div>
          <p className="home-desc">
            the place for introducing the website.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="home-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
        </svg>
      </div>
      <div className="home-right">
      <div className="home-bg"></div>
      <div className="vedio">
      <ReactPlayer width ='480px' height='240px' controls url="https://www.youtube.com/watch?v=DqcpTT06ChE"/>
      </div>
       
      </div>
    </div>
        
    );
};

export default Intro;

