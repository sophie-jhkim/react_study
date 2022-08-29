import Seo from "./Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home"></Seo>
      <div> Count </div>
    </>
  );
}

export async function getServerSideProps() {}
