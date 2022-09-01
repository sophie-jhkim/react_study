import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BaseCard({ animal }) {
  const router = useRouter();
  const onClick = (id, kindCd) => {
    /**
    router.push(`/animals/${id}`);
    query 같이 보내는 방법

     router.push({pathname: `/animals/${id}`,  query : {id: id, title: title}});
     query로 보낼경우 url에 다 노출되나 UI적으로 별로 좋지 않음. 아래 방법으로 숨길 수 있다.
     맨 뒤에 url만 노출된다

    router.push(
      { pathname: `/animals/${id}`, query: { kindCd: kindCd } },
      `/animals/${id}`
    );
     */
    // [...params].js 사용할 경우
    router.push({ pathname: `/animals/${kindCd}/${id}` });
  };
  return (
    <div onClick={() => onClick(animal.desertionNo, animal.kindCd)} className="animal" key={animal.desertionNo}>
      <div className="img_wrap">
        {/* <Link
              href={{
                pathname: `/animals/${animal.desertionNo}`,
                query: { kindCd: animal.kindCd },
              }}
              as={`/animals/${animal.desertionNo}`}
            > */}
        <Link href={`/animals/${animal.kindCd}/${animal.desertionNo}`}>
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
      <style jsx>
        {`
          .animal {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
            margin: 15px;
            padding: 15px;
            height: 150px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          }
          .animal .img_wrap {
            width: 100%;
            height: 120px;
            overflow: hidden;
            border-radius: 15px;
            position: relative;
            cursor: pointer;
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
