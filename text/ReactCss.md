### React에서 CSS사용하기
- css파일 만들기
    ex) `style.css`
- 사용할 파일에서 import 해주기
    - ex) `import "./style.css";`
        - 같은 폴더에 있다는 가정

#### tip
- 전체 화면 배경색을 지정해주었는데 제목의 `magin`으로 인해 여백이 생길 때가 있다.
- 이것을 '여백 상쇄'라 한다. 
- 더 자세히는 '마진 병합 상쇄 현상'이라 부른다.
- 자식 요소의 `margin`이 부모 요소 쪽으로 넘어가버린 현상이다.
- 이를 해결하기 위해서는 부모요소의 `css` 설정을 `display:flex;`로 설정하거나 `display:inline-flex;`로 설정해준다.

