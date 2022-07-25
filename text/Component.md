## Component
- 이전 강의에서 사용한 class형 컴포넌트는 이제 잘 사용하지 않는다.
    - 완전히 사라질 때까지 사용방법을 알고는 있는것이 바람직하다.

### Component
- 컴포넌트는 블록이다. 
<details>
<summary>예시 화면</summary>
<div markdown="1">
<br/><img src="../image/component_01.png" width="300px" height="300px" title="분할화면" alt="Ex_01"></img><br/>
</div>
</details>

- 웹사이트를 조각내보면 이 블록을 더 잘 이해할 수 있다.
    - 위의 예시와 같이 간단하게 블록을 잘라볼 수 있다.
    <details>
    <summary>예시 HTML 코드</summary>
    <div markdown="1">
    
        <!DOCTYPE html>
        <html lang="en">
        <head>
        </head>
        <body>
            <header> 
                ...
            </header>
            <div class="container">
                <div id="image-banner">
                    ...
                </div>
                <div id="contents-1">
                    ...
                </div>
            </div>
            <footer>
                ...
            </footer>
        </body>
        </html>

    </div>
    </details>
        
        <header/>
        <container/>
            <contents1/>
        <footer/>
        
>   - 이 웹사이트는 크게 `<header/>`, `<container/>`, `<footer/>` 세개의 컴포넌트가 있고, `<container/>` 컴포넌트는 자식 컴포넌트인 `<contents1/>` 컴포넌트로 이루어져 있다.

### State와 Props
- State는 Componenet가 가지고 있는 데이터이다.
    - `<header/>` 컴포넌트에서 사용할 데이터는 헤더 내부에 있다.
    - state는 이렇게 한 컴포넌트 내부에서 사용하는 정보를 생성, 수정하는 데이터이다.
- Props는 Component가 부모 Component로부터 받아온 데이터이다.
    - `<contents1/>`의 이미지 경로가 부모 컴포넌트인 `<container/>`에 있다고 가정한다면
        - `<contents1/>`컴포넌트는 부모 컴포넌트인  `<container/>`컴포넌트로부터 이미지 경로를 전달받아서 사용해야한다.
        - 부모 컴포넌트가 자식 컴포넌트 에게 전달해준 __이미지 경로__ , 곧 __데이터__ 가 자식 컴포넌트의 __props__ 가 된다.
    - 이때 부모 컴포넌트가 가지고 있는 데이터를 자식 컴포넌트가 추가하거나 수정할 수 없다.
    - __props__ 로 받은 데이터는 수정할 수 없다.

### Component 실습
- 코드
    <details>
    <summary>App.js</summary>
    <div markdown="1">

    ```javascript
    import React from 'react';
    import './App.css';
    // BucketList 컴포넌트를 import 해옵니다.
    // import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
    import BucketList from './BucketList';

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
            {/* 컴포넌트를 넣어줍니다. */}
            <BucketList list_a={this.state.list}/>
        </div>
        );
    }
    }

    export default App;
    ```

    </div>
    </details>

    <details>
    <summary>BucketList.js</summary>
    <div markdown="1">

    ```javascript
    // 리액트 패키지를 불러옵니다.
    import React from 'react'; 
    >
    // 함수형 컴포넌트는 이렇게 쓸 수도 있고
    // function Bucketlist(props){
    // return (
    // <div>버킷 리스트</div>
    // );
    // }
    >
    // 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
    // 저희는 앞으로 화살표 함수를 사용할거예요.
    // 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
    // js 함수가 값을 받아오는 것과 똑같이 받아오네요.
    const BucketList = (props) => {
    >
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
        console.log(props)
        return (
        <div>
        버킷 리스트
        </div>
        );
    }
    >
    // 우리가 만든 함수형 컴포넌트를 export 해줍니다.
    // export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
    export default BucketList;
    ```

    </div>
    </details>

    
- app.js
    - constructor로 컴포넌트 생성
    - super로 부모 클래스의 생성자를 호출
    - this로 자신의 컴포넌트가 갖고 있는 데이터, state를 넣어준다.
    - render 함수 내부에 리액스 엘리먼트를 넣어주고
        - 컴포넌트를 넣어준다.
- BucketList.js
    - 가져온 props를 console.log()에 넣어준다.


### 2-6 Quiz
- 코드
    <details>
    <summary>BucketList.js(주석으로 답 적어놓음)</summary>
    <div markdown="1">

    ```javascript
    // 리액트 패키지를 불러옵니다.
    import React from 'react'; 

    // 함수형 컴포넌트는 이렇게 쓸 수도 있고
    // function Bucketlist(props){
    // return (
    // <div>버킷 리스트</div>
    // );
    // }

    // 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
    // 저희는 앞으로 화살표 함수를 사용할거예요.
    // 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
    // js 함수가 값을 받아오는 것과 똑같이 받아오네요.
    const BucketList = ({list}) => {

        // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
        const my_lists = ['a', 'b', 'c'];
        // A1 : const my_lists = list;
        // A2 : 위에 {list}를 props의 파라미터 값인 props로 바꾸고 const my_lists = props;로 바꾸면 된다.

        // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
        return (
        <div>
        {
        // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 
        // 자세한 사용법은 아래 링크를 확인해주세요.
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        my_lists.map((list, index) => {
        // 콘솔을 확인해봅시다 :)
        console.log(list);
        return (<div key={index}>{list}</div>);
        })
        }
        </div>
        );
    }

    // 우리가 만든 함수형 컴포넌트를 export 해줍니다.
    // export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
    export default BucketList;
    ```

    </div>
    </details>