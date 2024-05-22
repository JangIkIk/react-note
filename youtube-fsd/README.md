[import-순서]
1. npm package
2. slice
3. Layers


[styled-component]
1. 감싸는 부분의 명은 root
2. 하위 요소는 역할별 명으로
3. export는 Style 객체에 포함하여 내보낸다


[vs코드설정]
- 설정 검색차에서 explorer.compactFolders를 입력하여 체크를 해제하면 폴더밑 파일 or 파일이 하나일때 겹치지 않음
- explorer


[FSD] - 공식홈 내용
- 모든 규모의 프로젝트에서 사용이 가능하다
- 프론트엔드 프로젝트에만 적용된다
- 단일 페이지, 간단한 앱에는 FSD의 이점이 필요하지 않다
- FSD의 구성은 Layers, Slices, Segments로 구성
- Slices는 동일한 Layers의 Slices를 사용할수 없으며, 이는 높은 응집력, 낮은 결합에 도움
- Slices의 하위로는 Segments가 이루어지며 일반적으로는 4개가 존재하며 생략하거나 추가가 가능하다
  - ui(components)
  - model(store,actions)
  - api
  - lib(utils/hooks)
- 대부분의 API는 shared에 위치하는것이 좋지만, 저장소 역할을 하는경우는 예외적으로 처리가 가능
- Layers는 하위에서 상위를 참조할수 없지만 Shared는 예외적이다.
- 공개 API를 사용하여 모듈단위의 집중화, 외부에 노출할 API정의, 내부구현의 자유로운 변경, 코드구성의 단순화
- shread같은 경우는 하나의 공개 API보다는 각 Segments에 존재하는게 좋다
- 페이지의 간단한 레이아웃은 shared/ui에 보관하고, 계층에 문제가 생긴다면, 위젯에서 정의하고, 앱라우터에서    조합하여 사용할수도 있다.


### 기본시작: https://feature-sliced.design/docs/get-started
### 가이드: https://feature-sliced.design/docs
### 참고자료: https://feature-sliced.design/docs/reference

# app - 앱 전체 설정, 스타일 및 공급자
# processes - (사용되지않음)
# pages - 엔티티, 기능 및 전처 페이지를 구성함
# widgets - 엔티티와 기능을 의미 있는 블록으로 결합하여 구성
# features - 사용자 상호 작용, 사용자에게 비즈니스 가치를 제공하는 구성
# entities - 엔터티의 인스턴스에 대한 데이터 저장 및 해당 데이터를 조작하는 기능입니다.
# shared - 프로젝트/비즈니스의 세부 사황과 분리된 재사용 가능한 구성



https://www.youtube.com/watch?v=3s1jaFDrp5M&list=RD4ZWU67DaTAg&index=24&pp=8AUB

[고민해보자]

각 api를 커스텀훅을 사용하여 코드를 줄인다.
error처리를 react-router-dom을 사용해서 효율적으로 볼수는 없나 ?


1. aside부분에 consts 정의
2. header 햄버거 메뉴 클릭시 aside 열림
3. shorts 부분 ui
4. 에러 바운더리 정의 (상태코드 예상)
5. 없는 페이지 접근시 nopFound 컴포넌트
6. 채널페이지 구독 버튼 features로 재정의
7. 채널페이지 부분 렌더링 재확인
8. fetch 커스텀훅 다시
9. 

