import NavBar from "./components/navbar/NavBar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Cta from "./components/cta/Cta";
import Footer from "./components/Footer/Footer";
import ServicePage from "./components/Pages/serviceLanding/ServicePage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import Scrollto from "./components/Scrollto";
import BlogPage from "./components/Pages/BlogPage/BlogPage";
import ArticlePage from "./components/Pages/Articlepage/ArticlePage";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy";


function App() {
  return (
    <main>
      {/* Render the NavBar */}
      <Scrollto />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service-page/:id" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />}  />
        <Route path="/blog/top-blog/:id" element={<ArticlePage />} />
        <Route path="/blog/latest-blog/:id" element={<ArticlePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog/featured/:id" element={<ArticlePage />} />
      </Routes>

      
    </main>
  );
}

export default App;
