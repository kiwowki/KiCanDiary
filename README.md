# KiCanDiary

\*\* 01.29
list, view, update 반응형 및 css 정리

\*\* 01.19
요구사항 우선순위


react-router-transition -> 페이지 전환시 스무스 효과
페이지 로딩 상태 관리하기


** write 비교해서 수정하기 **

4. 페이지 효과(비동기 한 번에 나오게 콜백이나 로딩이나 다른 효과 주기)
5. 로그인 로그아웃 등 얼럿(얼럿 꾸미기)
6. 회원가입창 css(이메일 확인 부분), 
7. 모든 마우스오버에 트랜지션 주기
8. 전체적인 백단 정리



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
(npm install -g firebase-tools)

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
1. Amazon EC2 (Elastic Compute Cloud)
가상 서버를 제공하며, 필요에 따라 컴퓨팅 리소스를 확장하거나 축소할 수 있습니다.
2. Amazon S3 (Simple Storage Service)
객체 스토리지 서비스로, 파일이나 데이터를 안전하게 저장할 수 있습니다.
3. Amazon RDS (Relational Database Service)
관계형 데이터베이스를 관리하며, MySQL, PostgreSQL, Oracle, SQL Server 등을 지원합니다.
4. Amazon Cognito
사용자 인증 및 권한 부여를 관리하는 클라우드 기반의 서비스입니다. 다양한 인증 및 사용자 관리 기능을 제공하여 개발자가 안전하게 사용자를 관리하고 애플리케이션에 사용자 등록 및 로그인 기능을 쉽게 추가할 수 있도록 지원합니다.

### Amazon Cognito
Amazon Cognito를 사용하면 사용자 관리와 보안을 효과적으로 처리할 수 있으며, 모바일 앱 및 웹 애플리케이션에서 사용자 경험을 향상시킬 수 있습니다. 
AWS의 다른 서비스와 통합하여 안전하고 강력한 클라우드 기반 애플리케이션을 개발할 수 있습니다.

#### Amazon Cognito 사용하기
1. client와 server에 `npm install aws-sdk` 로 asw-sdk 설치하기(Cognito를 포함한 여러 AWS 서비스에 대한 SDK를 모두 포함)

2. 













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
