# Javascript 기초

## 자바스크립트 기초(1)

### script가 body의 맨 아래에 위치하는 이유
- 아직 생성되지 않은 요소에 script가 적용 될 수 없기 때문
- 브라우저가 코드를 읽는 방식은 위에서 아래 방향이다.

### 실습
```javascript
<script>
    const title = document.getElementById("title");
    // 자바스크립트에서는 어떤 객체의 속성에 접근할 때 .을 이용해 접근할 수 있어요.
    // title이라는 요소의 style 속성에 접근하려면 아래와 같이 title.style로 접근할 수 있습니다!
    // style 안에 있는 속성에 접근할 때도 마찬가지예요. style.backgroundColor로 배경색 속성에 접근할 수 있어요.
    title.style.backgroundColor = "yellow";

    const wraps = document.getElementsByClassName("wrap");
    console.log(wraps);


        function sayHello (event) {
        console.log("hello");             
        }

        const buttons = document.getElementsByTagName("button");

    // 이 구문은 X! html collection은 유사 배열이기 때문에 array의 내장함수를 쓸 수 없어요!
    // buttons.map(b => {
        //console.log(b);
    //});        

    for (let i=0; i< buttons.length; i++){
        // .addEventListener()로 클릭 이벤트를 연결해줍니다. 
        buttons[i].addEventListener("click", sayHello);
    }
        

    function changeBackgroundColor (index) {
        // 가장 먼저 클래스 명으로 card들을 가지고 와봅시다! 아래 콘솔로 확인해보세요!
        console.log(document.getElementsByClassName("todo-card"));
        // 몇 번째 카드의 배경색을 바꿀 지 정해주었어요.
        let card = document.getElementsByClassName("todo-card")[index];
        // 그럼 바꿔봅시다! 저장 -> 브라우저로 돌아가 새로고침하면 확인할 수 있어요. :)
        card.style.backgroundColor = "gray";
    }
</script>
```

### DOM 요소 추가하기
```javascript
    // 새 요소를 만들어요.
    const new_div = document.createElement("div");

    // 한 눈에 확인해볼 수 있도록 스타일을 조금 추가해줄게요. 그냥 div는 눈에 안보일테니까요!
    new_div.style.backgroundColor = "green";
    new_div.style.width = "100px";
    new_div.style.height = "100px";

    // 요소를 body에 추가해줍시다.
    document.body.appendChild(new_div);
```
- DOM 요소를 만들어서 DOM에 넣어주어야 함