# React 설치

## nvm(Node Version Manager) 설치
- node의 버전이 매우 빠르게 업데이트 되기 때문에 버전 업데이트를 용이하게 하기 위해 사용함
- 링크(https://github.com/coreybutler/nvm-windows/releases)에 들어가서 'nvm-setup.zip'을 다운받고 설치한다.
- cmd창을 열고 `nvm -v` or `nvm version`을 입력해서 설치된 버전이 나온다면 설치 완료

## nvm으로 node 설치하기
- 링크(https://nodejs.org/ko/)에서 버전을 확인한 후 명령어로 설치한다.
- cmd창을 열고 `nvm install <버전>`을 입력하면 된다.
    예) `nvm install 16.16.0`
- 설치를 완료한 후 `node -v`로 설치 여부를 확인 할 수 있다.

## nvm으로 yarn 설치하기
- yarn은 누군가 만들어 놓은 좋은것, 패키지를 쉽게 설치하고 사용할 수 있게 해준다. 
- npm과 하는 일은 비슷하다.
- 명령어는 `npm install -g yarn`이다.
- 설치 완료 후 `yarn -v`로 설치 여부를 확인 할 수 있다.

## yarn으로 react시작하기
- `yarn add global create-react-app` 명령어를 입력하면 전역(global)에 이 패키지를 설치하겠다는 뜻이다.
- 시간이 꽤 걸린다.
- 설치 완료 후 프로젝트를 시작한다. 명령어는 `yarn create react-app week-1`(week-1은 프로젝트 명)
- `cd week-1`으로 폴더 이동 후 `yarn start`로 리액트 앱 실행
- 'localhost:3000'으로 앱이 시작될 것이다. 만약 실행되지 않는다면 크롬에 직접 주소를 입력하면 된다.