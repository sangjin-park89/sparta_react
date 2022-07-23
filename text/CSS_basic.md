### CSS

#### selector
- MDN 문서 링크 (https://developer.mozilla.org/ko/docs/Web/API/Document)
```
/* id selector */
#id { ... }

/* class selector */
.class { ... }

/* tag selector */
tagName { ... }

/* 여러 요소 선택하기 */
#id, .class { ... }

/* 수도 클래스 선택자 */
/* 어떤 요소가 특정 상태(마우스 올림, 포커스 됨 등등)일 때만 선택하게 해주는 선택자예요. */
button:hover { ... }
```

### 그리드 시스템
- 요소들이 갖는 각각의 영역 (레이아웃)
- 보통 네모난 모양임
- 오늘 강의에서는 display : flex;라는 설정으로 진행하지만, 여러가지 종류(table, block, grid 등)가 있으니 확인해보길 바람

### css 사칙연산
- calc()
- 상식적인 연산 순서를 갖음 (곱셈,나눗셈 먼저, 왼쪽에서 오른쪽 순서, 괄호 먼저)
- CSS MDN문서 링크(https://developer.mozilla.org/ko/docs/Web/CSS)