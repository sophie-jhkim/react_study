import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
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
              About
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        nav {
          text-align: center;
        }
        nav ul {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          padding-top: 20px;
          padding-bottom: 10px;
          padding-left: 0;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          list-style: none;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
