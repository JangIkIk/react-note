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
- Slices의 하위로는  Segments가 이루어지며 일반적으로는 4개가 존재하며 생략하거나 추가가 가능하다
  - ui(components)
  - model(store,actions)
  - api
  - lib(utils/hooks)
- 대부분의 API는 shared에 위치하는것이 좋지만, 저장소 역할을 하는경우는 예외적으로 처리가 가능
- Layers는 하위에서 상위를 참조할수 없지만 Shared는 예외적이다.

# app - 앱 전체 설정, 스타일 및 공급자
# processes - (사용되지않음)
# pages - 엔티티, 기능 및 전처 페이지를 구성함
# widgets - 엔티티와 기능을 의미 있는 블록으로 결합하여 구성
# features - 사용자 상호 작용, 사용자에게 비즈니스 가치를 제공하는 구성
# entities - 사업체?
# shared - 프로젝트/비즈니스의 세부 사황과 분리된 재사용 가능한 구성



