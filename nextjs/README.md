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

### redirect와 rewrite 하기 (client side)

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

redirects의 경우 실제로 source주소가 노출 된 후 destination주소로 이동되는데 destination주소를 아예 노출하지 않으면서 redirect하거나 프로젝트 내부에서 노출되면 안되는 destination주소(예를 들면 특정 api url이라던가 key값을 포함하는 주소)를 전역변수처럼 사용할때 rewrites를 사용한다고 할 수 있다.

```jsx
async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.API_KEY}&targetDt=20220825`,
      },
    ];
  },
```

**이때 중요한건 반드시 서버를 재실행해줘야 변경이 적용된다**

### SSR로 API 호출하기

**getServerSideProps** Next내장함수이기때문에 반드시 이 이름으로 사용해야 한다.
이렇게 호출할 경우 실제 SSR이기때문에 loading bar를 사용할 필요가 없으며 SEO에 적합하다.

```jsx
export async function getServerSideProps() {
  const { response } = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}&serviceKey=${process.env.SERVICE_KEY}`
    )
  ).json();
  return {
    props: {
      response,
    },
  };
}
```

이렇게 export한 props는 해당 컴포넌트에서

```jsx
// 　　　　　　　　　　　　　　　　↓　이렇게 매개변수처럼 받아서 사용할 수 있다
export default function Home({ response }) {
  // ...code
}
```

\* 넥스트의 getServerSideProps은 context를 기본으로 제공하는데

```jsx
export async function getServerSideProps(context) {
  console.log(constext);
  return {
    props: {},
  };
}
```

위 코드를 실행할 경우 터미널에 params를 포함한 context가 찍히는걸 확인할수 있다.
(이게 터미널에만찍히는 이유는 SSR이라서 그런가...?)

### [id].js 파일명 자동 라우팅

next는 page내에 있는 페이지들에 대해 자동 라우터가 설정되는데 movie폴더 안에 [id].js라는 파일에 작업 하면 자동으로 movie/:id url의 영화 상세페이지로 라우팅 된다. 그리고 상세페이지에서는 router를 사용해 query.id (이때 쿼리파람(id)는 저장한 파일명이다)를 사용할 수 있다.\
 \* [id].js로 할경우 단순히 id만 받아오지만 [...params].js로 할 경우 뒤에 오는 모든 파라미터를 배열으로 받을 수 있다.

### Link및 router.push를 사용한 페이지 이동

넥스트의 경우 자체제공하는 Link컴포넌트를 활용해 페이지 이동을 할 수 있다. 페이지 이동과 함께 query를 보낼경우 아래와 같이 보낸다. 이때 그냥 query로만 보낼경우 url에 노출되는데 UI상 마스킹하고 싶을 경우 아래와같이 as 속성을 사용할 수 있다.

```jsx
<Link
  href={{
    pathname: `/animals/${animal.desertionNo}`,
    query: { kindCd: animal.kindCd },
  }}
  as={`/animals/${animal.desertionNo}`}
>
  <img src={animal.filename} />
</Link>;

// onClick사용 router.push를 이용할 경우
router.push(
  { pathname: `/animals/${id}`, query: { kindCd: kindCd } },
  `/animals/${id}`
);
// 마지막 옵션으로 넣은 url이 실제 화면에 보여지는 url이 된다.
```

\*참고로 Link태그의 경우 단일 자식요소만을 가질 수 있으며 parent container에 router.push로 마스킹을 한 뒤, 특정 자식 요소에 똑같은 주소로 라우팅을 따로 걸 경우 as 옵션을 주지 않아도 해당 마스킹이 그대로 적용된다

### 넥스트 작업환경 설정

- env 접두어
  VUE env에서 사용하는 'VUE_APP\_'와 같은 접두어가 next에도 있다.

```
NEXT_PUBLIC_API_URL=http://apis.data.go.kr/
SERVICE_KEY=blahblah
```

**\"NEXT_PUBLIC\_\"** 접두어를 붙인경우 Client side, 일반 사용자에게도 공개 가능한 소스라고 할 수 있고, view페이지에서도 사용할 수 있다. 그렇지 않은경우 nextjs의 서버사이드에서만 접근 가능하며 실제로 콘솔로 찍어도 undefined로 찍힌다. \
그러나 위 [SSR API호출](###-SSR로-API-호출하기)의 경우 SERVICE_KEY값이 제대로 넘어가 api가 정상 호출 된다

**노출 불가한 소스는 반드시 .gitignore에 추가한다**

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
