import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  let name = "sangjin"

  return (
    <div id="id" className="App">
      {name !== "1" ? name : "1"}
      {name}
      <p style={{color : "orange", fontsize : "20px"}}>안녕하세요 리액트반 입니다!</p>

      <input type="text" />
    </div>
  );
}

export default App;
