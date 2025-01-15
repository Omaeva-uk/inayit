import NavBar from "../../navbar/NavBar";
import FeaturedBlog from "./FeaturedBlog";
import LatestBlog from "./LatestBlog";
import TopBlog from "./TopBlog";
import BlogCta from "../../BlogCta/BlogCta";
import Pagination from "../../Pagination/Pagination";
import Footer from "../../Footer/Footer";

const BlogPage = () => {
  return (
    <div className="">
        <NavBar />
        <section className="!mt-20 w-[80%] mx-auto">
          <FeaturedBlog />
        </section>
        <section className="!mt-20 w-[80%] mx-auto">
          <TopBlog />
        </section>
        <section className="!mt-20 w-[80%] mx-auto">
          <LatestBlog />
        </section>
        <section className="!mt-20 w-[80%] mx-auto">
          <BlogCta />
        </section>
        <Footer />
    </div>
  )
}

export default BlogPage;