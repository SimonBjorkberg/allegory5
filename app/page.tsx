import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className="home-section">
        <Banner />
      </div>
    </>
  );
}