import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
// import "./style.css";
import styled from "styled-components";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
      console.log(this.state.list)
      return (
      <Sangjin>
      <div className="App">
        <MyStyled>
        <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="Line"></hr>
          <BucketList list={this.state.list}/>
        </div>
        </MyStyled>
      </div>
      </Sangjin>
    );
  }
}

// styled components
// 사용 방법이 간단하고 직관적이다.
const Sangjin = styled.div`
  background-color: #eee;
  height : 100vh;
  width : 100vw;
  display : block;
`;

const MyStyled = styled.div`
  background-color: #fff;
  width : 50vw;
  max-width: 350px;
  margin: 0 auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

  h1 {
    color: slateblue;
    text-align: center;
  }

  hr {
    margin: 16px 0px;
  }
`;



export default App;