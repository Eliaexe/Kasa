import Gallery from "../components/Galley";
import Header from "../components/Header";
import HeadImage from "../components/HeadImage";
import "../styles/GeneralStyle.css"

function Home() {
  return (
    <div>
      <Header />
      <HeadImage/>
      <Gallery/>
    </div>
  );
}

export default Home;