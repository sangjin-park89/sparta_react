## 스파르타 강의를 듣고 기록하는 개인 공간입니다.

#### tip
- console.log가 두번씩 실행되는 현상이 발생해서 구글 검색해보았다.
- src/index.js 파일에 `<App/>`이 `<React.StrictMode>`로 감싸져 있기 때문에 발생하는 문제라고 한다.
- 앞뒤에 `<React.StrictMode>`를 제거하면 문제가 해결된다.