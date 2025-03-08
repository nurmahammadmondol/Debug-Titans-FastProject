import Image from 'next/image';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <h1> hello</h1>
    </div>
  );
}
