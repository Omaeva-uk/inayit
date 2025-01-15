import { Link } from "react-router-dom";
import { topBlog } from "../../../data";
import { useState } from "react";

const TopBlog = () => {

    const [topBlogHover, setTopBlogHover] = useState(null);


  return (
    <section className="my-20">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium">Top Blog</h2>
        <div className=" mt-20 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:auto-rows-[270px] ">
            {
                topBlog.map((item,i) => (
                    <Link to={`/blog/top-blog/${item.id}`} key={item.id} className={`${item.gridClassname} cursor-pointer h-full`} onMouseEnter={() => setTopBlogHover(item.id)} onMouseLeave={() => setTopBlogHover(null)} >
                        <div className={`${item.classname} gap-5 max-lg:flex max-lg:flex-col `}>
                            <div className={`${item.id === 1 && 'mb-4 lg:h-[300px]'} h-[220px] lg:h-full rounded-[30px] lg:flex-1 overflow-hidden`}><img className={`${topBlogHover === item.id && 'scale-105 transition-all'} w-full h-full object-cover object-center`} src={item.img} alt="Article Image" /></div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex flex-wrap justify-between items-center mb-4">
                                {item.tag && <div className="text-xs py-1 px-2 border-primary border-opacity-40 border rounded-3xl text-left max-w-max">&middot; {item.tag}</div>}
                                
                                <span>{item.date}</span>
                            </div>
                            <div>
                                <h3 className="text-xl line-clamp-2 font-medium mb-2">{item.title}</h3>
                                <p className="text-sm line-clamp-3 text-gray-700">{item.content}</p>
                            </div>
                            <div className="mt-6 rounded-full overflow-hidden">
                                <div className="flex items-center gap-5"><div className="bg-gray-500 w-[50px] overflow-hidden rounded-full"><img src={item.authorImg} alt="Auther Image" /></div><p className="flex flex-col">{item.author} <span className="text-xs text-gray-600">{item.authorTitle}</span></p></div>
                            </div>
                            </div>
                            
                        </div>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default TopBlog;