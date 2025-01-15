

const ArticlePageHero = ({article}) => {
  //console.log(article);
  return (
    <div>
      <div>
        <div className="flex gap-8 justify-center items-center">
            <p className="text-xs sm:text-md">Published on {article.date}</p>
            <div className="w-[5px] h-[5px] rounded-full bg-gray-900"></div>
            <p className="text-xs sm:text-md text-gray-700">By {article.author}</p>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center max-w-3xl mx-auto mt-5">{article.title}</h1>
        <p className="text-sm text-center text-gray-700 max-w-lg mx-auto mt-5">{article.content}</p>
        <div className="flex gap-5 flex-wrap justify-center items-center mt-5">
          {
            article.articlePage.tag.map(((item, i) => (
              <div key={i} className="text-xs py-1 px-2 border-primary border-opacity-40 border rounded-3xl text-left max-w-max">&middot; {item}</div>
            )))
          }
        </div>
        <div className="mt-10 mx-auto max-w-[1000px] max-h-[550px] rounded-3xl overflow-hidden">
          <img src={article.articlePage.mainImg} alt={article.title} className=" object-cover object-center w-full" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 text-gray-800 space-y-10">
        <p className="leading-[160%]">{article.articlePage.intro}</p>
        <h2 className="leading-[130%] text-2xl">{article.articlePage.keypointsHeading}</h2>
        {
          article.articlePage.keypoints.map((item,i) => (
            <div className="flex items-start gap-3 justify-start">
              <div className="w-[15px] h-[6px] mt-3 bg-gray-800 rounded-full self-start"></div>
              <div>
                <h3 className="text-xl">{item.heading}</h3>
                <p>{item.para}</p>
              </div>
            </div>
          ))
        }
        <p className="leading-[160%]">{article.articlePage.conclusion}</p>
      </div>
    </div>
  )
}

export default ArticlePageHero;