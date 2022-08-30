import { useRouter } from "next/router";
export default function AnimalId() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h4> {router.query.kindCd || "Loading..."} </h4>
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
