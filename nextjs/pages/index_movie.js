import { useEffect, useState } from "react";
import Seo from "./Seo";
// 니꼴라스가 알려준 movie 사이트 email 인증 안돼서 영화진흥위원회까로 했는데 이미지가없음...

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { boxOfficeResult } = await (await fetch("/api/movies")).json();
      console.log(boxOfficeResult.dailyBoxOfficeList);
      setMovies(boxOfficeResult.dailyBoxOfficeList);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.movieCd}>
          <div className="movie" key={movie.movieCd}>
            {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> */}
            <h4>{movie.movieNm}</h4>
          </div>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
