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

### Event type

form이나 a태그, 이벤트를 사용할때 이벤트의 타입도 명시해줘야 한다.

```typescript
// InputField.tsx
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //참고로 커스텀함수의 경우 선언한 페이지( App.tsx)에서 함수에 마우스 오버시 해당 type이 나오니 복사해서 쓰면 된다
  addTodo: (event: React.FormEvent) => void;
}
```

### ref

input요소에 focus등의 기능을 사용하기 위해서는 ref 속성과 useRef 기능을 사용할 수 있다.

```tsx
// InputField.tsx

// code...
const inputRef = useRef<HTMLInputElement>(null); // 이렇게 선언해주고
<form
  className="input"
  onSubmit={(event) => {
    inputRef.current?.blur(); // submit 한뒤 해당 요소에 focus를 해제함(blur)
  }}
>
  <input
    ref={inputRef} // 할당
    type="text"
    value={todo}
    onChange={(event) => setTodo(event.target.value)}
    placeholder="Enter a task"
    className="input__box"
  />
  <button className="input_submit" type="submit">
    Go
  </button>
</form>;
//code...
```
