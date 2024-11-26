import { Navbar, Main, Product, Footer } from "../components";
import MySlider from "../components/Slider";

function Home() {
  return (
    <>
      <Navbar />
      <MySlider />
      <Product />
      <Footer />
    </>
  )
}

export default Home