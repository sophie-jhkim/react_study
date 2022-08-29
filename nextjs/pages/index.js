import { useEffect, useState } from "react";
import Seo from "./Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ response }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/animals/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {response.body.items.item?.map((animal) => (
        <div
          onClick={() => onClick(animal.desertionNo)}
          className="animal"
          key={animal.desertionNo}
        >
          <div className="img_wrap">
            <Link href={`/animals/${animal.desertionNo}`}>
              <img src={animal.filename} />
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <label>품종 : </label> {animal.kindCd}
              </li>
              <li>
                <label>등록일 : </label> {animal.noticeSdt}
              </li>
              <li>
                <label>지역 : </label> {animal.orgNm}
              </li>
              <li>
                <label>구조장소 : </label> {animal.happenPlace}
              </li>
            </ul>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .animal {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
            padding: 20px;
            height: 150px;
          }
          .animal .img_wrap {
            width: 100%;
            height: 120px;
            overflow: hidden;
            border-radius: 15px;
            position: relative;
          }
          .animal .img_wrap img {
            width: 100%;
            min-height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          ul {
            list-style: none;
            margin: auto 0;
            padding: 10px 0;
            box-sizing: border-box;
          }
          li {
            margin-bottom: 5px;
          }
          label {
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

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
