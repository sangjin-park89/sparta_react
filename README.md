## 스파르타 강의를 듣고 기록하는 개인 공간입니다.

#### tip 1
- console.log가 두번씩 실행되는 현상이 발생해서 구글 검색해보았다.
- src/index.js 파일에 `<App/>`이 `<React.StrictMode>`로 감싸져 있기 때문에 발생하는 문제라고 한다.
- 앞뒤에 `<React.StrictMode>`를 제거하면 문제가 해결된다.

#### tip 2
- md파일 업로드하기 전에 미리보기 할 수 있다.
- Ctrl + Shift + V 
- 붙여넣기 하다가 우연히 알게되어서 다른 방법은 모른다.

#### tip 3
- css margin : 0 auto;로 설정했는데 content가 가운데 정렬이 안될경우
- display : block; 설정 더해주기
