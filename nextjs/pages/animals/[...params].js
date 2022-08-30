import { useRouter } from "next/router";
import Seo from "../Seo";
export default function AnimalId({ params }) {
  const router = useRouter();
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];
  // url로 직접 입력할 경우 서버에서는 아직 router.query가 존재하지 않기때문에 위와같이 예외처리 '|| []'를 해줘야한다.
  return (
    <div>
      <Seo title={title} />
      <h4> {title || "Loading..."} </h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // 넥스트의 SSR의 context가 제공해주는 url params를 받아서 처리하는 방법.
  // 단순한 로직일경우 api fetch를 다시 하지 않고 이런식으로 작업하는 것도 하나의 방법이다.
  return {
    props: {
      params,
    },
  };
}
