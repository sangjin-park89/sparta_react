## JSX
- jsx는 react에서 사용하는 문법이다.
- react에는 html 파일이 단 한개만 존재한다.(public폴더 안에 index.html)
- jsx문법으로 react요소를 만들고 dom에 랜더링 시켜서 화면을 그린다.

## JSX 사용법
- - 1. 태그는 꼭 닫아주기
    App.js 파일에서 실습합니다! (오류를 내면서 해보는 거예요!)
    function App() 내부는 지워주세요.
    ```jsx
    // input 태그를 닫지 않고 넣어볼거예요!
    function App() {
      return (
        <div className="App">
          <input type='text'>
        </div>
      );
    }
    ```
    JSX 문법에 맞지 않는다고 에러가 납니다! 아래처럼 /를 추가하고 브라우저를 새로고침 해봅시다.
    
    ```jsx
    <input type='text'/>
    ```
    
- 2. 무조건 1개의 엘리먼트를 반환하기
    
    이번엔 return 아래에 p태그를 하나 추가해볼까요?
    
    ```jsx
    return (
        <p>안녕하세요! 리액트 반입니다 :)</p>
    
        <div className="App">
          <input type='text'/>
        </div>
      );
    ```
    앗! 또 에러가 나네요! 컴포넌트에서 반환할 수 있는 엘리먼트는 1개입니다. 아래와 같이 바꾸고 다시 새로고침 해보세요.
    
    ```jsx
    return (
        <div className="App">
          <p>안녕하세요! 리액트 반입니다 :)</p>
          <input type='text'/>
        </div>
      );
    ```
    
- 3. JSX에서 javascript 값을 가져오려면?
    
    중괄호를 쓴다!
    
    ```jsx
    	const cat_name = 'perl';
    // return 부분만 복사해서 붙여넣고 크롬 브라우저로 돌아가 새로고침 해봅시다.
        return (
          <div>
            hello {cat_name}!
          </div>
        );
    ```
    
    <aside>
    👉 값을 가져올 때 뿐만 아니라, map, 삼항연산자 등 자바스크립트 문법을 JSX 안에 쓸 때도 {}를 이용할 수 있어요. 해볼까요?😎
    
    </aside>
    
    ```jsx
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    
    function App() {
      const number = 1;
    
      return (
        <div className="App">
          <p>안녕하세요! 리액트 반입니다 :)</p>
          {/* JSX 내에서 코드 주석은 이렇게 씁니다 :) */}
          {/* 삼항 연산자를 사용했어요 */}
          <p>{number > 10 ? number+'은 10보다 크다': number+'은 10보다 작다'}</p>
        </div>
      );
    }
    
    export default App;
    ```
    
- 4. class 대신 className!
    
    처음부터 약간 거슬리던 친구가 있지 않나요?
    
    ```jsx
    <div className="App">
    ```
    
    JSX로 작성하는 태그 내에서 클래스 명을 정해줄 땐 속성 값을 className으로 사용합니다. class대신에요!
    +)
    그럼 id도 설마..? 하셨나요? id는 그냥 id로 씁니다.
    
- 5. 인라인으로 style 주기
    `{{ }}`중괄호를 한번 주게되면 딕셔너리로 인식하기 때문에 두번줘서 style로 인식할 수 있게 해준다.