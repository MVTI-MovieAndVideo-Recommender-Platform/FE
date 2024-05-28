## [개발 일지]
### 0415)
FE_git, 브랜치 생성 후 업로드

### 0416)   git commit error 수정

### 0418-9) Type Script 으로 수정 (mvti0418) 및 ESLint 적용
### 0424wed - 이번주말
	- 테스트페이지 레이아웃 잡기 -> 연결까지 연습
	- 필요한 컴포넌트( 참고해서 구현)
	- 추가할 컴포넌트 정리(버튼-> 화면 연결, 사용자/추천데이터 구현, 메인- 스와이프)
	- 페이지 레이아웃 6개 모두 만들기
	- 반응형
	- api 연결(구글로그인 가입, 가게등록, 사업자등록, 사업자번호확인, apo연동
	회원가입페이지 디자인 적용)
	메인페이지 작업 시작
	- 컴포넌트 미리 구현(슬라이드(웹:버튼),클릭->목록 추가, 검색 기능)
	- 컴포넌트 붙일 단락 분리

### 0517 - BrowserRouter 수정 및 각 페이지 이동 구현
코드 수정:
-index.js_기존 방식:페이지 이동 시 공통 컴포넌트가 매번 렌더링, 비효율적이었음. 
   수정:  BrowserRouter를 App 컴포넌트 감싸기
      App 컴포넌트 내부에서 BrowserRouter를 중복방지, 유지보수 유리.

-index.js에서 root 없는경우 오류출력코드 추가


### 0518 - 
-레이아웃.js 생성 및 관리
   favicon,  헤더, 푸터, 사이드바 만들어서 각 페이지에서 랜더링
   
1. SideBar.js 수정
기존 React-DOM에서 컴포넌트를 활용한 렌더링으로 변경 
(addEventOnElements-DOM)조작 함수는 React의 useEffect와 같은 Hook을 사용
useEffect를 사용해 genreList를 업데이트하고 이벤트를 추가하는 방식으로 변경

### 0521-23
버튼 -> 화면 이동 구현
<리엑트 부트스트랩_>
https://react-bootstrap.github.io/docs/components/buttons

### 0525까지
관리용 api / 서비스용 api
데이터 파이프라인 - 기능 기준으로 카테고리 분리하기
[구현 시 참고]
컴포넌트다이어그램
- 각 로고만 보여주는 것이 아니라, 각각의 관계성과 flow가 나타나도록 
관리용 api / 서비스용 api

데이터 파이프라인

기능적인 카테고리를 분리
_  _  _  _  _  _  _  _  _  _  _
### [구현 시 참고]
컴포넌트다이어그램: 각 로고만 보여주는 것이 아니라, 각각의 관계성과 flow가 나타나도록 
관리용 api / 서비스용 api 구분하기 -> 도식화하기
데이터 파이프라인 수정
