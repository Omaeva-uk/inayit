import NavBar from "../../navbar/NavBar";
import Testimonial from "../../testimonial/Testimonial";
import Cta from "../../cta/Cta";
import Footer from "../../Footer/Footer";
import ServicePageHero from "../../servicepagehero/ServicePageHero";
import ServicePageInfo from "../../servicepageinfo/ServicePageInfo";
import { individualServices } from "../../../data";
import { useParams } from "react-router-dom";
import Cta1 from "../../cta/cta1";

const ServicePage = () => {

  const params = useParams();
 // console.log(params.id);

 const service = individualServices.find(service => parseInt(params.id) === service.id);
 // console.log(service);




  return (
    <div className="">
      <NavBar />
      <ServicePageHero service={service} />
      <ServicePageInfo service={service.infoCard} />
      <Testimonial />
      <Cta1 />
      <Footer />
    </div>
  )
}

export default ServicePage;