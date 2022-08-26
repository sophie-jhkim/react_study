# Next.js

### Next.js 프로젝트 설치

\*타입스크립트

```shell
npx create-next-app@latest --ts
```

위 명령어 실행후 프로젝트명을 설정할 수 있다.

#### 넥스트 작업환경 설정

- 2022년 8월 현재 node 16.17.0버전에서 create-next-app 실행중인데 바벨 설정이 제대로 안되어있어 컴포넌트 *import*에 빨간 밑줄 warning이뜬다
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
