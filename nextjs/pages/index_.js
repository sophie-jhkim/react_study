import Seo from './Seo';
import BaseCard from '../components/BaseCard';

export default function Home({ response }) {
  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {response.body.items.item?.map((animal) => (
        <BaseCard animal={animal} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { response } = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}&serviceKey=${process.env.SERVICE_KEY}`)).json();
  return {
    props: {
      response
    }
  };
}
