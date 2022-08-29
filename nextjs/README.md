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

```jsx
import styles from "./NavBar.module.css";
/// ...code
<Link href="/">
  <a className={styles.red}> Home </a>
</Link>;
///...code
```

- style jsx\
  \<style>태그를 그대로 사용한다

```jsx
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

이 방법은 \<style jsx global>으로 선언해 전역 사용이 가능하지만 만약 이 스타일 자체를 특정 페이지에 적용한다면 해당 페이지에만 적용된다.\
(ex. 전역적으로 사용하는 nav컴포넌트에 사용할경우 전역으로 쓸 수 있지만 about페이지에 적용했을경우 about페이지를 제외한 다른 페이지에서는 적용되지 않음)

### custom \_app.js

pages루트 경로에 \_app.js 파일을 생성해 layout처럼 사용할 수 있다

```jsx
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

### redirect와 rewrite 하기

넥스트js에서 리다이렉트를 사용하기 위해서는 next.config.js를 설정해야한다.

```js
// next.config.js
const nextConfig = {
  //... code
  async redirects() {
    return [{ source: "/contact", destination: "/form", permanent: false }];
  },
};
```

위와 같이 설정한 경우 url이 contact로 입력되면 form페이지로 redirect된다.
파라미터도 함께 가져올 수 있는데

```js
return [{ source: "/contact/:id", destination: "/form/:id", permanent: false }];
// 또는
return [
  { source: "/contact/:id*", destination: "/form/:id*", permanent: false },
];
// *을 붙이면 뒤에 오는 모든 파라미터를 받아올 수 있다.
```

**이때 중요한건 반드시 서버를 재실행해줘야 변경이 적용된다**

#### 넥스트 작업환경 설정

- 2022년 8월 현재 node 16.17.0버전에서 create-next-app 실행했는데 바벨 설정이 제대로 안되어있어 컴포넌트 *import*에 빨간 밑줄 warning이뜬다
- 해결방법은 아래 파일 두개를 생성 및 설정하면 된다.
  - root경로에 .babelrc 파일 생성

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

- .eslintrc.json 수정

```json
{
  "extends": ["next/babel", "next/core-web-vitals"]
}
```
