import NavBar from "../../navbar/NavBar";
import Footer from "../../Footer/Footer";
import { useLocation, useParams } from "react-router-dom";
import BlogCta from "../../BlogCta/BlogCta";
import { latestBlog } from "../../../data";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import ArticlePageHero from "./ArticlePageHero";
import { featuredBlog, topBlog  } from "../../../data";
import { Co2Sharp } from "@mui/icons-material";

const ArticlePage = () => {

  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const {pathname} = useLocation();
  
    const params = useParams();
    console.log(params.id);

    useEffect(() => {
      
      const fetchData = () => {
        if(pathname.includes("top-blog")){
          let response = topBlog.find(item => parseInt(item.id) === parseInt(params.id));
        setData(response);
        setLoading(false);
        }else if(pathname.includes("latest-blog")){
          let response = latestBlog.find(item => parseInt(item.id) === parseInt(params.id));
        setData(response);
        setLoading(false);
        }else if(pathname.includes("featured")){
          let response = featuredBlog;
        setData(response);
        setLoading(false);
        }
        
      }



      fetchData();
      
    },[pathname])
    

    


  //const article = latestBlog.find(item => parseInt(item.id) === parseInt(params.id));
  let otherArticles = latestBlog.filter(item => parseInt(item.id) !== parseInt(params.id));
  
  
 



  return (
    <div className="">
        <NavBar />
        <section className="!mt-20 w-[80%] mx-auto">
          {
            loading ? <h1>Loading</h1> : <ArticlePageHero article={data} /> 
          }
          
        </section>
        <section className="!mt-20 w-[80%] mx-auto">
          
        </section>
        <section className="!mt-20 w-[80%] mx-auto">
            <section className="my-20">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium">Read Other Articles</h2>
              <div className='grid gap-7 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-14'>
                {
                  otherArticles.slice(0,3).map((item, i) => (
                    <Link to={`/blog/latest-blog/${item.id}`} key={item.id} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                      <div className="overflow-hidden rounded-3xl">
                        <img src={item.img} className={`${hovered === i &&  'scale-105 transition-all'}`} alt="blog image" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="text-xs py-1 px-2 border-primary border-opacity-40 border rounded-3xl text-left max-w-max">&middot; {item.tag}</div>
                          <p>{item.date}</p>
                        </div>
                          <h3 className="text-xl mt-5 line-clamp-2 font-medium mb-2">{item.title}</h3>
                          <p className="text-sm mb-5 line-clamp-3 text-gray-700">{item.content}</p>
                        </div>
                        <Link to={`/blog/latest-blog/${item.id}`}><button className={`${hovered === i && 'bg-primary transition-all text-white'} border border-primary  text-primary py-2 px-3 rounded-3xl flex justify-between items-center gap-3 `}>Read More</button></Link> 
                    </Link>
                  ))
                }
              </div>
          </section>
        </section>
        <section className="!mt-20 w-[80%] mx-auto">
          <BlogCta />
        </section>
        <Footer />
    </div>
  )
}

export default ArticlePage;