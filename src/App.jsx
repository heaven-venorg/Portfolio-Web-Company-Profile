import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Jumbotron from "./Component/Jumbotron/Jumbotron";
import Sponsor from "./Component/Sponsor/Sponsor";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="mx-5 md:mx-15">
      <Navbar />
      <div className="flex flex-col gap-5">
        <Jumbotron />
        <Sponsor />
        <About />
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default App;
