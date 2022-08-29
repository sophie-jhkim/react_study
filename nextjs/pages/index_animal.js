import { useEffect, useState } from "react";
import Seo from "./Seo";
// 공공데이터 유기동물API로 적용해보려고 했으나 next.config.js에서 rewrites로 url이랑 api_key 숨기는(?) 과정에서 api호출 자체가 안됨(serviceKey가 제대로 안넘어가는듯...)

export default function Home() {
  const [animals, setAnimals] = useState();
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log("key::::::", key, url);
  useEffect(() => {
    (async () => {
      const { response } = await (await fetch("/api/animals/json")).json();
      console.log(response);
      setAnimals(response.body.items.item);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {!animals && <h4>Loading...</h4>}
      {animals?.map((animal) => (
        <div className="animal" key={animal.desertionNo}>
          <div className="img_wrap">
            <img src={animal.filename} />
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

// export async function getServerSideProps() {}
