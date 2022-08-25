# React Typescript

리액트 타입스크립트 STUDY\
참고 : [인프런(타입스크립트)](https://www.inflearn.com/course/react-with-typescript/dashboard), [Youtube(React&Typescript Tutorial)](https://www.youtube.com/watch?v=FJDVKeh7RJI&ab_channel=freeCodeCamp.org)

## Basic Types in Typescript

let name: string; \
let age: number; \
let isStudentL boolean;\
let hobbies: string[];\
let role: [number, string]; (튜플)

### Object

```typescript
let person: Object; // 권장하는 방법은 아님
type Person = {
  name: string;
  age: number;
};
let person: Person;

person = { name: "김남길", age: 42 };
// 이 경우 반드시 모든 속성값을 넣어줘야 하는데 특정 속성값을 선택적(옵션)으로 받기위해서 아래와 같이 물음표를 사용하면 된다

type Person = {
  name: string;
  age?: number;
};

// ※ 객체 배열
let lotsOfPeople: Person[];
```

### Union

하나의 변수가 두가지 이상의 타입을 가질경우 역슬래시(|)사용

```typescript
let age: number | string;
```

### function

```typescript
// let printName: Function; 가능하지만 권장하는 방법은 아님. 아래와 같이 매개변수와 리턴 값까지 써주는 것이 좋다.
let printName: (name: string) => void;
// 참고로 void는 undefined을 리턴하고 never는 아무것도 리턴하지않음

function printName(name: string) {
  console.log(name);
}
```

### Any 와 Unknown

```typescript
let personName: any; // 가능하지만 역시 권장하는 방법은 아님
let personName: unknown; // 타입을 명시하기 어려운 경우 any보다는 unknown을 사용하는 것이 낫다.
```

## type & interface

```typescript
type Person = {
  name: string;
  age: number;
};

interface Person {
  name: string;
  age: number;
}
```

위 두 값은 똑같다고 할 수 있는데 아래와같이 확장 방법에 차이점이있다.

```typescript
//TYPE
type Person = {
  name: string;
  age: number;
};
type Info = Person & {
  // &을 사용해 확장
  job: string;
  email: string;
};

let contact: Info = {
  name: "김남길",
  age: 42,
  job: "배우",
  email: "email@email.com",
};
```

```typescript
// INTERFACE
interface Person {
  name: string;
  age: number;
}

interface Info extends Person {
  // extends 사용
  job: string;
  email: string;
}

let contact: Info = {
  name: "김남길",
  age: 42,
  job: "배우",
  email: "email@email.com",
};
```

참고로 확장은 같은 종류?뿐만아니라 서로 다른 종류로도 가능하다\
ex) \
type B = A(interface) & {~};\
interface C extends B {~} ;
