# KiCanDiary

\*\* 01.19
요구사항 우선순위

1. 페이지네이션 구현하기 // 해결

2. list 페이지 엘리먼트 정렬하기 -> 이건 css로 해결해야 함

3. 로그인 로그아웃 로직 제대로 구현해야함 -> 현재 로그인 로그아웃 시 어떤 페이지에서든
   -> 로그인 정보를 제대로 불러오고, 접근 권한 제대로 있어야함--> 로그아웃 시 상태관리

   -> aws로 변경하기! 구현중..ing

react-router-transition -> 페이지 전환시 스무스 효과
페이지 로딩 상태 관리하기


** write 비교해서 수정하기 **



반응형
@media (max-width: 1280px) {}
@media (max-width: 768px) {}
@media (max-width: 480px) {}

## client

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

## server

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


## AWS(Amazon Web Services)
Amazon Web Services(AWS)는 아마존 닷컴의 자회사로서, 클라우드 컴퓨팅 및 다양한 IT 인프라 서비스를 제공하는 전 세계적으로 큰 클라우드 서비스 제공업체 중 하나입니다.
AWS는 기업부터 개발자, 스타트업까지 다양한 사용자에게 클라우드 기반의 인프라와 서비스를 제공하여 비용 절감, 확장성, 안정성, 보안성 등 다양한 이점을 제공합니다.

### 주요 AWS 서비스 및 기능













### branch로 git에 올리기

git checkout -b <새로운 브랜치 이름>

git switch -c <새로운 브랜치 이름>

git add .

git commit -m "커밋 메시지"

git push -u origin <브랜치 이름>

git push origin <브랜치 이름>

### branch 합병하기

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
