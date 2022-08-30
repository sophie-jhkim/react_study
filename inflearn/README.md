# React Typescript Inflearn

[인프런](https://www.inflearn.com/course/react-with-typescript) 강의 중\
router, SSR, Redux 등 첫강(component)제외 내용 정리

## react router v4

typescript router 설치

```
npm install react-router-dom @types/react-router-dom
```

기본적으로 아래 처럼 쓴다

```tsx
import { BrowerRouter as Router, Route, Link } from "react-router-dom";
```

간단하게는 App.tsx에 return문 안에서 라우트를 설정할 수 있는데

```tsx
// ...code
return (
  <Router>
    <Route exact={true} path="/" render={() => <h3>Home</>}>
    <Route path="/intro" render={() => <h3>Intro</>}>
  </Router>
);
```

이때 exact 속성을 설정해 기본적으로 '/'경로인 Home이 다른페이지에서는 보이지 않도록 한다.
