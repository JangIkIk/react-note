[폴더별 역할구분]

[Layers]
### assets [Slices/Segments]
- img, viedo, font 파일들을 보관하는 폴더
### components (공유) [Segments]
- 특정 비즈니스에 로직에 종속되지 않은 재사용 가능 컴포넌트를 가지는 폴더
- 전역적으로 공유는 하지만 간단한 컴포넌트를 기준이다
- 상태를 관여하지 않는 컴포넌트
  
### features [Slices/Segments]
- 하나의 기능을 담당하는 폴더로서 slice/segments를 구성한다
- slice는 기능이름을 사용하여 폴더로 생성한다
- segments 폴더구성
  1. hooks: 해당 슬라이스에서만 사용되는 커스텀 hooks
  2. styles: 해당 슬라이스에서만 사용되는 css로 views하나당 하나원칙
  3. views: 해당 슬라이스에서만 사용되는 컴포넌트들을 분리
  4. sliceFile.tsx: 해당 slice의 최초 진입점이자 root 파일
  5. slcieFile.css: 해당 slcie의 root css 파일
- 전역적으로 공유는 하지만 상태등이 관여하는 컴포넌트(ex: 유튜브의 viedo card 처럼) 

### hooks [Segments]
- 특정 비즈니스 로직에 종속되지 않은 재사용 가능 hooks를 가지는 폴더 컴포넌트 및 기능?
### pages [Segments]
- 각 페이지를 담당하는 폴더로서 segments만 존재한다
### states [Slices/Segments]
- 상태관리 관련
### utils [Segments]
- 컴포넌트가 아닌 단순 계산의 함수단위 기능들


[조사]
1. js와 jsx의 차이점은 무엇인가?
2. public와 src의 차이점은 무엇인가?
3. node.js의 정의는 ?
4. 렌더링 최적화 (react hooks??)