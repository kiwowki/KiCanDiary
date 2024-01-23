# KiCanDiary

--추가적으로 할일
--> firebase 에러처리 정리하기
--> 로그인 새로고침 끊김 해결
--> 로딩 해결
\*\* 01.23

1. 회원가입 및 로그인 구현하기

-   상황1. 체크하여 통과하고 값을 변경 -> firebase aleready 에러

-   기능은 firebase 혹은 authO 사용할 것으로 예상됨

현재 개선해야할 점 ->
회원가입 페이지의 상태코드가 설정되어있지 않음
메시지 나올 때 css 망가짐 -> absolute로 만든 버튼 위치 고치기
-> 버튼 누를 때 hover 애니메이션 주기 = 해결
네비게이션에서 엑티브 매치하기 - 해결

\*\* 01.22
-> 수정 및 삭제 구현 완료

1. quill에 들어가는 데이터 파싱해서 update 구현하기

-   수정 구현 제대로 해야함
-   이전글 불러오기 or quill 수정하기 둘 중에 하나만 되는 버그 고치기

\*\* 01.21
요구사항 및 개선할 점

1. uid가 없는 경우 혹은 uid 가 있으나 등록한 글이 없는 경우 ui 화면의 깨짐 방지
2. update delete 기능 구현하기

-   import DOMPurify from "dompurify";

3.

\*\* 01.19
요구사항 우선순위

1. 페이지네이션 구현하기 // 해결

2. list 페이지 엘리먼트 정렬하기 -> 이건 css로 해결해야 함

3. 로그인 로그아웃 로직 제대로 구현해야함 -> 현재 로그인 로그아웃 시 어떤 페이지에서든
   -> 로그인 정보를 제대로 불러오고, 접근 권한 제대로 있어야함--> 로그아웃 시 상태관리

react-router-transition -> 페이지 전환시 스무스 효과
페이지 로딩 상태 관리하기

** write 비교해서 수정하기 **

01.02//
var.scss 수정 (--box-pink3: #ffdfdf; 추가)
font.scss 수정 (pretendard import로 전 굵기 수정)
main.scss 수정 (전체 width값 등등, .voca\_\_img에 z-index: -1; 추가)
header.scss 수정 (aside border-right 색상 수정)
VocaList.jsx, scss 수정
DiaryList.jsx, scss 추가

        modified:   ../README.md
        modified:   src/App.js
        new file:   src/assets/img/diarylist_voca_bg.jpg
        new file:   src/assets/img/diarylist_voca_title.png
        new file:   src/assets/img/mycollection_bg.png
        new file:   src/assets/img/mycollection_title.png
        new file:   src/assets/scss/section/_diarylist.scss
        modified:   src/assets/scss/section/_header.scss
        modified:   src/assets/scss/section/_main.scss
        modified:   src/assets/scss/section/_vocalist.scss
        modified:   src/assets/scss/setting/_fonts.scss
        modified:   src/assets/scss/setting/_vars.scss
        modified:   src/assets/scss/style.scss
        new file:   src/components/diary/DiaryList.jsx
        modified:   src/components/layout/Aside.jsx
        modified:   src/components/layout/Header.jsx
        modified:   src/components/voca/VocaList.jsx

01.03//
header_m 수정
DiaryList.jsx, scss 수정
public > index.html 수정, favicon.svg 추가

01.04//
DiaryView.jsx, scss 추가

반응형
@media (max-width: 1280px) {}
@media (max-width: 768px) {}
@media (max-width: 480px) {}

# client

npx create-react-app .  
npm install sass  
npm install react-bootstrap bootstrap  
npm install react-router-dom

npm install quill@1.3.6

npm i swiper
npm i react-calendar

npm i @studio-freight/lenis
npm install axios  
npm install http-proxy-middleware  
(src폴더에 setupProxy.js 추가)

npm i @emotion/css  
npm i @emotion/react  
npm i @emotion/styled @emotion/react

npm install firebase

npm install react-redux  
npm install @reduxjs/toolkit

(npm install react-quill --save -> 대체 함)

-   ✍️React-quill
    React Quill은 React 기반의 위지윅 에디터 라이브러리 중 하나로, Quill.js 라이브러리를 React에서 사용할 수 있도록 wrapping한 것이다.
    React Quill은 커스터마이징 가능한 옵션과 이벤트 핸들러를 제공하여, 더욱 다양한 위지윅 에디터를 구현할 수 있다.
    Quill.js ? 오픈소스로 제공되며, 최신 웹 기술을 활용하여 구축된 위지윅 에디터이다.

‼️설치 : 1. `npm install react-quill --save `
[React Quill Editor 적용 참고](https://velog.io/@mingle_1017/React-Quill-Editor%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90)

# server

(npm init;)  
npm init -y;  
npm install express --save;  
npm install mongodb;  
npm install nodemon --save;

npm install path --save;  
npm install mongoose --save;

npm install multer --save;
npm install request

npm install --save aws-sdk@2.348.0
npm install multer-s3@2.10.0

npm install axios

(package.json파일에

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

로 변경하기
)

## branch로 git에 올리기

git checkout -b <새로운 브랜치 이름>

git switch -c <새로운 브랜치 이름>

git add .

git commit -m "커밋 메시지"

git push -u origin <브랜치 이름>

git push origin <브랜치 이름>

## branch 합병하기

1. client 폴더에서 git branch 로 본인 브랜치에 접속 되어있는지 확인 후, 목록에 master 브랜치도 있는지 확인하기.
   (만약 master가 없다면 git switch -c master 로 추가)

2. git switch master 로 master 브랜치에 접속하기.
3. git pull origin 으로 master의 최신 커밋 가져오기.
4. 다시 git switch 본인브랜치 로 돌아오기.
5. git merge master 하여 본인의 브랜치와 합병.
6. 파일명에 빨간색으로 느낌표가 떠있다면 파일에 들어가서 최신 소스로 변경하기.(만약 본인 소스가 더 최신이라면 본인 소스로 변경해주세요.)
7. npm start 하여 오류 없는지 확인하기. 있다면 그 부분도 수정해주세요.

#### 페이지 구현하기

## 트러블 슈팅

<details>
<summary>[Git 경고 메세지] LF will be replaced by CRLF in 해결 방안</summary>

-   `git config --global core.autocrlf true`
</details>
