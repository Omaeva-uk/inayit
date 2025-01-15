

const BlogCta = () => {
  return (
    <div className="mb-24">
        <div className="bg-primary max-sm:p-5 p-10 gap-5 flex flex-wrap rounded-3xl">
            <div className="flex-1 min-w-[325px]">
                <h4 className="text-2xl md:text-xl lg:text-5xl font-semibold max-sm:max-w-[12rem] max-w-lg text-white mb-5">Ready to experience Inayit's services?</h4>
                <form action="" className="bg-white max-w-max py-2 pl-4 pr-2 rounded-full">
                    <input type="email" required placeholder="Put in your email" className=" outline-none mr-5 max-sm:max-w-[100px]" />
                    <button type="submit" className="bg-primary rounded-full py-2 px-6 text-white">Send</button>
                </form>
            </div>
            <div className="flex-1 self-end">
                <p className="text-white text-lg mb-2">Empowering Businesses with Smart AI Solutions</p>
                <p className="text-sm text-gray-200 max-w-lg">Explore how to efficiently migrate to AWS and learn how organizations can better navigate this complex process with IBM Turbonomic.</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCta;