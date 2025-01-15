import { featuredBlog } from "../../../data";
import { HashLink as Link } from "react-router-hash-link";

const FeaturedBlog = () => {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto gap-16">
        <div className="flex-1">
            <div className="text-xs py-1 px-2 border-primary border-opacity-40 border rounded-3xl text-left max-w-max">&middot; {featuredBlog.tag}</div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl my-4 text-left max-w-[470px]">{featuredBlog.title}</h1>
            <p className="text-sm mb-5 max-w-md text-gray-700">{featuredBlog.content}</p>
            <div className="flex flex-wrap gap-4 lg:gap-8">
               {/* <Link to="/#contact-us"><button className="bg-primary text-white py-1 px-3 pr-[5px] rounded-3xl flex justify-between items-center gap-3 ">Get secured today <span className="bg-white text-primary p-1 px-2 rounded-full"><i className="fa-solid fa-arrow-right"></i></span></button></Link>  */}
               <Link to={`/blog/featured/${featuredBlog.id}`}><button className="border hover:bg-primary hover:text-white hover:transition-all border-primary  text-primary py-2 px-3 rounded-3xl flex justify-between items-center gap-3 ">Read More</button></Link> 
            </div>
            
        </div>
        <div className="flex-1 min-w-[300px]">
            <div className="grid grid-cols-2 auto-rows-[220px] gap-5 featured-grid">
                <div className=" col-span-2 rounded-2xl overflow-hidden"><img src={featuredBlog.img1} alt="featured image" className="w-full h-full object-cover object-center" /></div>
                <div className=" rounded-2xl overflow-hidden"><img src={featuredBlog.img2} alt="featured image" className="w-full h-full object-cover object-center" /></div>
                <div className=" rounded-xl overflow-hidden"><img src={featuredBlog.img3} alt="featured image" className="w-full h-full object-cover object-center" /></div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedBlog;