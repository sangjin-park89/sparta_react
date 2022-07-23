# Javascript 기초

## 자바스크립트 기초(3)

### Array 내장 함수

#### map
- 어떤 배열의 속한 항목을 변환하여 새로운 배열을 만들때 많이 사용함
- 원본 배열은 변하지 않음
```javascript
const array_num = [0, 1, 2, 3, 4, 5];

const new_array = array_num.map((array_item) =>{ 
	return array_item + 1;
});
// 새 배열의 값은 원본 배열 원소에 +1 한 값입니다.
console.log(new_array);
// 원본 배열은 그대로 있죠!
console.log(array_num);
```

#### filter
- 어떤 조건을 만족시키는 항목들을 골라서 새로운 배열을 만들어 주는 함수
- 원본 배열을 변하지 않음
```javascript
const array_num = [0, 1, 2, 3, 4, 5];

// forEach(콜백함수)
const new_array = array_num.filter((array_item) => {
	// 특정 조건을 만족할 때만 return 하면 됩니다!
	// return에는 true 혹은 false가 들어가야 해요.
	return array_item > 3;
});

console.log(new_array);
```

#### concat
- 두개의 배열을 합칠 떄 사용하는 함수
- 원본 배열은 변하지 않음
- 중복을 허용함
```javascript
const array_num01 = [0, 1, 2, 3];
const array_num02 = [3, 4, 5];

const merge = array_num01.concat(array_num02);

// 중복 항목(숫자 3)이 제거되었나요? 아니면 그대로 있나요? :)
console.log(merge);
```
```javascript
const array_num01 = [0, 1, 2, 3];
const array_num02 = [3, 4, 5];
// Set은 자바스크립트의 자료형 중 하나로, 
// 중복되지 않는 값을 가지는 리스트입니다. :)!
// ... <- 이 점 3개는 스프레드 문법이라고 불러요.
// 배열 안에 있는 항목들(요소들)을 전부 꺼내준다는 뜻입니다.
// 즉 [...array_num01]은 array_num01에 있는 항목을 전부 꺼내 
// 새로운 배열([] 이 껍데기가 새로운 배열을 뜻하죠!)에 넣어주겠단 말입니다!
const merge = [...new Set([...array_num01, ...array_num02])];

// 중복 항목(숫자 3)이 제거되었나요? 아니면 그대로 있나요? :)
console.log(merge);
```

#### from
- 유사 배열을 만들어 새로운 배을로 만들 때
- 새로운 배열을 만들 때(초기화할 때)
	유사배열) `[값, 값]` 이런 모양으로 생겼지만, 배열의 내장 함수를 사용하지 못하는 배열. DOM nodelist가 있음
```javascript
// 배열화 하자!
const my_name = "mean0";
const my_name_array = Array.from(my_name);
console.log(my_name_array);

// 길이가 문자열과 같고, 0부터 4까지 숫자를 요소로 갖는 배열을 만들어볼거예요. 
const text_array = Array.from('hello', (item, idx) => {return idx});

console.log(text_array);


// 새 배열을 만들어 보자!(=> 빈 배열을 초기화한다고도 해요.)
// 길이가 4고, 0부터 3까지 숫자를 요소로 갖는 배열을 만들어볼거예요. 
const new_array = Array.from({length: 4}, (item, idx)=>{ return idx;});

console.log(new_array);
```