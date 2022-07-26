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

    this.text = React.createRef();
  }

  componentDidMount() { 
  }

  addBucket = () => {
    console.log(this.text.current.value);
    const new_item = this.text.current.value;

    this.setState({ list : [...this.state.list, new_item] });
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    
    return (
      <Appwrap>
      <div className="App">
        <MyStyled>
        <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="Line"></hr>
          <BucketList list={this.state.list}/>
        </div>
        </MyStyled>
        
        <InputWrap>
          <input type="text" ref={this.text}/>
          <button onClick={this.addBucket}>추가하기</button>
        </InputWrap>
      </div>
      </Appwrap>
    );
  }
}

const InputWrap = styled.div`
  background-color: #fff;
  width : 50vw;
  max-width: 350px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`

// styled components
// 사용 방법이 간단하고 직관적이다.


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

const Appwrap = styled.div`
  background-color : #eee;
  height : 100vh;
  /* vh(vertical height)는 화면 비율 높이 단위 */
  width: 100vw;
  /* vw(vertical width)는 화면 비율 넓이 단위 */
  display : flex;
  /* flex를 주면 자신이 딱 필요한 만큼만 필요로 하기 때문에 대부분의 경우 높이와 넓이를 지정해주는게 이쁘다. */
  /* 지금같은 경우에는 전체가 아니라 아래 container에서 높이와 넓이를 따로 주었다. */
  flex-direction: column;
`;



export default App;