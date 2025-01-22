
import { latestBlog } from "../../../data";
import { HashLink as Link } from "react-router-hash-link";
import Pagination from "../../Pagination/Pagination";
import { useState, useEffect } from "react";

const LatestBlog = () => {

  const [pagination, setPagination] = useState(1);
  const [startingPoint, setStartingPoint] = useState(0);
  const [endingPoint, setEndingPoint] = useState(6);
  const [hovered, setHovered] = useState(null);
 
  useEffect(() => {
    if(pagination === 1){
    setStartingPoint(0);
    setEndingPoint(6);
  }else if(pagination === 2){
    setStartingPoint(6);
    setEndingPoint(12);
  }
  }, [pagination])
  

  return (
    <section className="my-20">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium">Latest Blog</h2>
        <div className='grid gap-7 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-14'>
          {
            latestBlog.slice(startingPoint,endingPoint).map((item, i) => (
              <Link to={`/blog/latest-blog/${item.id}`} key={item.id} className="flex flex-col" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <div className="overflow-hidden rounded-3xl">
                  <img src={item?.img} className={`${hovered === i &&  'scale-105 transition-all'} w-full object-cover object-center`} alt="blog image" />
                </div>
                <div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-xs py-1 px-2 border-primary border-opacity-40 border rounded-3xl text-left max-w-max">&middot; {item.tag}</div>
                    <p>{item.date}</p>
                  </div>
                    <h3 className="text-xl mt-5 line-clamp-2 font-medium mb-2">{item.title}</h3>
                    <p className="text-sm mb-5 line-clamp-3 text-gray-700">{item.content}</p>
                  </div>
                  <Link to={`/blog/latest-blog/${item.id}`} className="mt-auto" ><button className={`${hovered === i && 'bg-primary transition-all text-white'} border border-primary  text-primary py-2 px-3 rounded-3xl flex justify-between items-center gap-3 `}>Read More</button></Link> 
              </Link>
            ))
          }
        </div>
        <Pagination page={pagination} setPagination={setPagination} />
    </section>
  )
}

export default LatestBlog;