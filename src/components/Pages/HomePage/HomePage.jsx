import NavBar from "../../navbar/NavBar";
import Landing from "../../landing/Landing";
import About from "../../about/About";
import Services from "../../services/Services";
import Testimonial from "../../testimonial/Testimonial";
import Cta from "../../cta/Cta";
import Footer from "../../Footer/Footer";
import Faq from "../../Faq/Faq";
import Cta1 from "../../cta/cta1";





const HomePage = () => {
  return (
    <div>
        <NavBar />
      <Landing />
      <About />
      <Services />
      <Testimonial />
      <Faq />
      <Cta1 />
      <Footer />
    </div>
  )
}

export default HomePage;