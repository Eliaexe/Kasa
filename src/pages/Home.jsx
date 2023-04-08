import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HeadImage from "../components/HeadImage";
import Footer from "../components/Footer";
import "../styles/GeneralStyle.css"


function Home() {
  return (
    <div>
      <Header />
      <HeadImage/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default Home;