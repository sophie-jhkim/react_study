# React Typescript Inflearn

[인프런](https://www.inflearn.com/course/react-with-typescript) 강의 중\
router, SSR, Redux 등 커리큘럼을 베이스로 공식 문서 및 최신 자료로 study

## react router 6

typescript router 설치

```
npm install react-router-dom
```

타입스크립트 플러그인은 보통 @types로 타입을 명시해줘야 하지만 react router 6는 자동 타입스크립트 설정이라 이렇게만 설치해도 된다.

기본적으로 아래 처럼 쓴다

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

간단하게 App.tsx에 return문 안에서 라우트를 설정할 수 있는데

```tsx
// ...code
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
```

와 같이 Route의 element속성에 컴포넌트를 연결해주면 된다.

### query params 주고 받기

```tsx
// ...code
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about">
        <Route index element={<About />} />
        <Route path=":number" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```

App.tsx에서 위처럼 number라는 파라미터를 넘긴경우 about페이지에서 받을때는 아래처럼 useParams 라는 훅을 사용해 받는다

```tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const [message, setMessage] = useState('');
  const { number } = useParams();
  useEffect(() => {
    if (number) {
      setMessage('The number is ' + number);
    } else {
      setMessage('No number was provided');
    }
  }, []);

  return (
    <div>
      <p>this is the about page</p>
      <p>{message}</p>
    </div>
  );
};
```

### Layout

리액트의 <Outlet>을 사용한다. vue의 router-vue 같은 느낌..

### Link 컴포넌트, useNavigate를 사용한 페이지 이동

```tsx
<Link to="/about">Go to the About Page!</Link>;

// 또는
const navigate = useNavigate();
<button
  onClick={() => {
    navigate('/layout/123');
  }}
>
  Go to layout width a number
</button>;
```

Link 컴포넌트의 경우 html \<a\>태그와 유사하지만 전체페이지를 리로드하는 것이 아닌 필요한 부분만 리로드 한다
