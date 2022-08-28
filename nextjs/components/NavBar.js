import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <li>
          {/* nextjs에서는 링크를 걸기위해 a태그 대신 Link컴포넌트를 사용할 수 있는데 대신 일반적인 태그처럼 사용할 수 없기때문에 class명이나 스타일을 쓰기위해 Link태그 안에 a태그를 사용한다.  */}{" "}
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}> Home </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              {" "}
              About{" "}
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  );
}
