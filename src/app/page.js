import Banner from './Components/Banner';
import LatestCourse from './Components/LatestCourse/LatestCourse';
import Popular from './Components/Popular/Popular';

export default function Home() {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <LatestCourse></LatestCourse>
      <Popular></Popular>
    </div>
  );
}
