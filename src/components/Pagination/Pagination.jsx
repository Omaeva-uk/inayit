

const Pagination = ({page, setPagination}) => {

 
function nextBlog(){
  if(page > 1){
    return;
  }else{
    setPagination(prev => prev + 1);
    
  }
  
}

function prevBlog(){
  if(page === 1){
    return;
  }else{
    setPagination(prev => prev - 1);
  }
  
}


  return (
    <div className="flex justify-between items-center">
      <div className=" cursor-pointer" onClick={prevBlog}>Previous</div>
      <div className="bg-gray-200 py-1 px-3 rounded-full">{page}</div>
      <div className=" cursor-pointer" onClick={nextBlog}>Next</div>
    </div>
  )
}

export default Pagination;