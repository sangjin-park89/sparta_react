import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import "./style.css";
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
      <div className="App">
        <MyStyled>
          <p>I'm here!</p>
        </MyStyled>
        {/* <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="Line"></hr>
          <BucketList list={this.state.list}/>
        </div> */}
      </div>
    );
  }
}

// styled components
  // 사용 방법이 간단하고 직관적이다.
const MyStyled = styled.div`
  width: 50vw;
  height: 150px;
  background-color: ${(props) => (props.bg_color? "red": "purple")};
  // 같은 태그 안에 하위 태그를 표현할때 아래와 같은 방식으로 진행한다.
  p {
    color: blue;
  }
  // 위 태그에 호버 같은 요소를 넣을 때는 아래와 같이 '&'기호를 넣어주면 된다.
  &:hover{
    background-color: yellow;
  }
`;

export default App;