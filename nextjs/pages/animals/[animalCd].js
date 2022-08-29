import { useRouter } from "next/router";
export default function AnimalId() {
  const router = useRouter();
  console.log(router);
  return "animal details";
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
