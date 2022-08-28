# Next.js

### Next.js 프로젝트 설치

\*타입스크립트

```shell
npx create-next-app@latest --ts
```

위 명령어 실행후 프로젝트명을 설정할 수 있다.

### nextjs styles

- module.css 활용\
  {name}.module.css 파일명으로 스타일 파일을 만들어 필요한 페이지에 import한다.
  실제로 적용은 변수를 사용하듯 import한 변수명.class명으로 사용하고 실제로 돔에 반영은 class명\_\_blahblah 로 반영되어 클래스명을 중첩 사용해도 스타일이 충돌하지 않는다는 장점이 있다.

```javascript
import styles from "./NavBar.module.css";
/// ...code
<Link href="/">
  <a className={styles.red}> Home </a>
</Link>;
///...code
```

- style jsx\
  \<style>태그를 그대로 사용한다

```javascript
//...code
return (
  <div>
    code
    <style jsx>
      {`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}
    </style>
  </div>
);
//...
```

### custom \_app.js

pages루트 경로에 \_app.js 파일을 생성해 layout처럼 사용할 수 있다

```javascript
// pages/_app.js
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
```

#### 넥스트 작업환경 설정

- 2022년 8월 현재 node 16.17.0버전에서 create-next-app 실행했는데 바벨 설정이 제대로 안되어있어 컴포넌트 *import*에 빨간 밑줄 warning이뜬다
- 해결방법은 아래 파일 두개를 생성 및 설정하면 된다.
  - root경로에 .babelrc 파일 생성

```
{
  "presets": ["next/babel"],
  "plugins": []
}
```

- .eslintrc.json 수정

```
{
  "extends":["next/babel", "next/core-web-vitals"]
}
```
