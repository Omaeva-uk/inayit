import NavBar from "./components/navbar/NavBar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Cta from "./components/cta/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* Render the NavBar */}
      <NavBar />
      <Landing />
      <About />
      <Services />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
