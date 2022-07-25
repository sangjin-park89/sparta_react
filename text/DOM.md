## DOM

### DOM(Document Object Model, 문서객체모델)
- html 요소 하나하나를 객체로 생각하는 모델
- 예를 들어 'div'라는 객체가 가지고 있는 상위 혹은 하위의 객체를 표현하는 트리구조
- 이 객체 모델은 문서 내의 모든 요소를 정의하고, 각각의 요소에 접근하는 방법을 제공한다.

### DOM 트리 확인하기
- 크롬에서 F12키를 눌러 개발자도구를 열고 콘솔 탭을 엽니다.
    (맥은 Cmd + Opt + i)
    ```javascript
    - document // 현재 dom트리 확인
    - document.body // dom트리 안에 body의 내용 확인

    // body의 자식 요소 접근하기
    - document.body.childNodes
    - document.body.children
    - document.getElementsByTagName("div")
    ```
- 여러가지 방법을 확인해보기 위한 [문서 링크](https://developer.mozilla.org/ko/docs/Web/API/Document)