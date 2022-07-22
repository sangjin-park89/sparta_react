# Javascript 기초

## 자바스크립트 기초(2)

### ES6
- React는 javascript의 라이브러리이므로 이에대해 지식이 필요함
- ES6는 자바스크립트 표준 문법 중 가장 보편화된 것
- 변수를 선언할 때 var, let, const로 할 수 있다.
- const는 재할당이 불가능하고 let은 재할당이 가능하다.
- const, let은 블록 레벨 스코프를 갖고 var는 함수 레벨 스코프이다.
```javascript
function scope(){
	const a = 0;
	let b = 0;
	var c = 0;

	// {} 증괄호 안에 든 내용을 블럭이라고 표현해요.
	
	if(a === 0){
		const a = 1;
		let b = 1;
		var c = 1;
		console.log(a, b, c);
	}
	// 앗! c는 값이 변했죠? 
	// 그렇습니다. var는 함수 단위라서 if문 밖에서 선언한 값이 변했어요.
	// let과 const로 선언한 겂은 어떤가요? if문 안쪽 내용이 바깥 내용에 영향을 끼치지 않죠?
	console.log(a, b, c);
}
```

### 함수
- 미리 만들어 놓은 코드 묶음...
- 내장함수는 자바스크립트를 쓰기 편하도록 미리 만들어 놓은 코드 묶음
- 함수를 선언하는 방법에는 세가지가 있다.
- 함수 선언식
```javascript
function do_something() { ... }
```
- 함수 표현식
```javascript
// 함수 이름은 생략해도 괜찮아요!
let do_something = function [함수 이름]() { ... }
```
- 화살표 함수
```javascript
// 화살표 함수는 함수 표현식의 단축형입니다.
// function까지 생력이 되었죠!
let do_something = () => { ... }
```

### Class
- 이후 리액트를 배울때 모양이 어떤지 알아야한다.
- 객체 단위로 코드를 그룹화하고 쉽게 재사용하기 위해 사용
```javascript
class Cat {
	// 생성자 함수
  constructor(name) {
		// 여기서 this는 이 클래스입니다.
		this.name = name; 
	}

	// 함수
	showName(){
		console.log(this.name);
	}
}

// 여기서 new는 키워드예요. 새로운 무언가를 만들기 위해서 생성자 함수와 함께 씁니다.
// 네, new와 생성자 함수는 세트예요 :) (소근 
let cat = new Cat('perl');
cat.showName();
console.log(cat);
```
- 클래스의 상속
```javascript
class Cat {
	// 생성자 함수
  constructor(name) {
		// 여기서 this는 이 클래스입니다.
		this.name = name; 
	}

	// 함수
	showName(){
		console.log(this.name);
		return this.name;
	}
}

// extends는 Cat 클래스를 상속 받아 온단 뜻입니다.
class MyCat extends Cat {
	// 생성자 함수
  constructor(name, age) {
		// super를 메서드로 사용하기
		super(name); 
		this.age = age; 
	}
	
	// 부모 클래스가 가진 것과 같은 이름의 함수를 만들 수 있습니다.
	// 오버라이딩한다고 해요.
	showName(){
		console.log(this.name);
		// super를 키워드로 사용하기
		return '내 고양이 이름은 '+super.showName()+'입니다.';
	}
	
	showAge(){
		console.log('내 고양이는 '+this.age+'살 입니다!');
	}
}

let my_cat = new MyCat('perl', 4);
my_cat.showName();
my_cat.showAge();
```

### `=`과 `==`과 `===`
- `=` : 할당을 뜻함. 어떤 변수에 값을 할당할 때 사용
- `==` : 유형을 비교하지 않는 등차. 변수 값을 기반으로 비교
    (ex. 0=='0'은 true 반환)
- `===` : 유형도 비교하는 엄격한 등차
    (ex. 0 === "0"은 false를 반환. Number와 String)

### Spread 연산자
- 객체 내부에 있는 요소를 객체 바깥으로 꺼내줌 `[...]`
```javascript
let array = [1,2,3,4,5];
// ... <- 이 점 3개를 스프레드 문법이라고 불러요.
// 배열 안에 있는 항목들(요소들)을 전부 꺼내준다는 뜻입니다.
// 즉 [...array]은 array에 있는 항목을 전부 꺼내 
// 새로운 배열([] => 이 껍데기가 새로운 배열을 뜻하죠!)에 넣어주겠단 말입니다!
let new_array = [...array];

console.log(new_array);
```

### 조건부 삼항 연산자
- if문의 단축 형태
- 사용법 : 조건 ? 참일 경우 : 거짓일 경우
```javascript
let info = {name: "mean0", id: 0};

let is_me = info.name === "mean0"? true : false;

console.log(is_me);
```