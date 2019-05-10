import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LeftComponent from './LeftComponent';
import MiddleComponent from './MiddleComponent';
import RightComponent from './RightComponent';
import NavComponent from './NavComponent';

function App(){
   return (
     <div class="page-container">
        <div class="top-nav">
          <NavComponent></NavComponent>
        </div>
        <div class="body-components">
          <LeftComponent></LeftComponent>
          <MiddleComponent></MiddleComponent>
          <RightComponent></RightComponent>
        </div>
     </div>
  );
 }
export default App;
