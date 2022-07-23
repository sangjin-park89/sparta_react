import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  let name = "sangjin"
  const style = {
    border: "1px solid #eee",
    padding: "20px",
    width: "200px",
    margin: "30px auto",
  };
  return (
    <div id="id" className="App">
      <div style={style}>
        <h1 style={{color: "green"}}>안녕하세요!</h1>
        <hr/>
        <p style={{textAlign: "left"}}>이름을 입력해주세요.</p>
        <input type="text"/>
      </div>
    </div>
  );
}

export default App;
