import fs from 'fs';
import path from 'path';
import Header from '../../../components/Header';


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'hotel_es.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const hotel = JSON.parse(jsonData);

  return {
    props: { hotel },
  };
}

export default function Habitaciones({ hotel }) {
  return (
    <div>
     <Header/>

      <h1>Habitaciones</h1>
      <ul>
        {hotel.rooms.map((room, index) => (
          <li key={index}>
            <a href={`/hotel-wyndham-grand-costa-del-sol-lima-airport/habitaciones/${room.slug}`}>{room.name}</a>
          </li>
        ))}
      </ul>
      <a href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport/rooms/">🇬🇧 English Version</a>
    </div>
  );
}
