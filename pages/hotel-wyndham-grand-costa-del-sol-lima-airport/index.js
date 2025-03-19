import fs from 'fs';
import path from 'path';
import Intro from '../../components/Intro';
import Header from '../../components/Header';
import Beneficios from '../../components/Beneficios';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'hotel_es.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const hotel = JSON.parse(jsonData);

  return {
    props: { hotel },
  };
}

export default function Home({ hotel }) {
  return (
    <div>
      <Header/>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <a href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport/">🇬🇧 English Version</a>
      <Intro />
      <Beneficios/>
    </div>
  );
}