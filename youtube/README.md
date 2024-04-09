# node.js 설치시 npm도 같이 설치된다.
- https://nodejs.org/en/download

# TypeScript
- https://www.typescriptlang.org/docs/handbook/compiler-options.html#handbook-content

# WebPack
- https://webpack.kr/

# babel
- https://babeljs.io/docs/presets

# 기존 node는 18버전이므로 변경하였음
- Homebrew가 설치되어있어서 brew 명령어를 사용함
1. brew uninstall node@ver 삭제
2. brew install node@ver 설치
3. brew unlink node : 기존 버전 링크 끊음
4. brew link --overwrite node@특정 ver 연결

# npm init -y를 통한 package.json 설정
- npm i react react-dom 
  - react: 리액트의 여러함수를 사용하기 위함
  - react-dom: 리액트의 가상돔을 사용하기 위함
  
- npm i @types/react @types/reat-dom typeScript
  - @types/react: 리액트함수의 타입을 정의를 위함
  - @types/react-dom: 리액트 가상돔의 타입정의를 위함
  - typeScript: 타입스크립트 문법을 사용하기 위함

- npm i webpack-cli webpack-dev-server
  - webpack-cli: 웹팩을 터미널에서 사용하기 위함
  - webpack-dev-server: 웹팩 개발서버를 사용하기 위함

- npm i -D babel-loader ts-loader
  - babel-loader: jsx를 해석하기위한 로더
  - ts-loader: ts파일을 해석하기위한 로더