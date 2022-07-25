## Styled Components
- CSS-in-JS 라이브러리 중 하나이다.
- 간단하게 컴포넌트에 스타일을 직접 입히는 방식이라 생각해도 무방하다.

### 설치
- 터미널에 `yarn add styled-components`라고 입력한다.
- 주의 사항은 경로를 프로젝트 폴더로 맞춰 놓아야 한다는 것이다.

### 사용법
- `import styled from "styled-components";`로 임포트 해준다.
- 원하는 자리에 태그를 추가해준다.
- 태그 이름으로 변수를 선언해주고 `styled.div`로 지정한 후 백틱( ` )으로 감싸준다.
- 예제 코드 - 변수 명은 `<Mystyled>`이다.
    <details>
    <summary>code</summary>
    <div markdown="1">

    ```javascript
    render() {
      return (
      <div className="App">
        <MyStyled>
          <p>I'm here!</p>
        </MyStyled>
      </div>
        );
    }

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
    ```

    </div>
    </details>