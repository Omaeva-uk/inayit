import { useEffect, useState } from "react";
import { faqData } from "../../data";
import "./faq.css";

const Faq = () => {


    const [faqSelected, setFaqSelected] = useState(null);
    function faqToggle(id){

        console.log(id)
        

        if(faqSelected === id){
           return  setFaqSelected(null);
            console.log(faqSelected)
        }
        
        setFaqSelected(id);
    }

    
  
    


  return (
    <section className="w-[80%] mx-auto my-12">
        <h2 className="text-center font-bold text-[32px] text-[#333]">Frequently asked questions</h2>
        <div className="flex gap-7 max-sm:flex-wrap mt-12 items-center">
            <div className="flex-1">
                <h4 className="text-2xl font-semibold mb-5">Have any questions?</h4>
                <p className="text-md text-gray-600 max-w-md">We’re here to help! Whether you need clarity on our services, guidance on IT solutions, or support with your business goals, feel free to reach out. </p>
            </div>
            <div className="flexflex-col flex-[1.2]">
                {
                    faqData.map((item,i) => (
                        <div key={i} className="mb-5 faq-box ">
                            <div onClick={() => faqToggle(item.id)} className="flex question-box justify-between items-start cursor-pointer">
                                <div className="font-semibold text-lg text-white bg-primary w-8 h-8 rounded-full flex justify-center items-center ">{item.id}</div>
                                <p className="flex-1 mx-4 mb-3 font-semibold text-lg">{item.question}</p>
                                <div>{`${faqSelected === item.id ? "-" : "+"}`}</div>
                            </div>
                            <div className={`${faqSelected === item.id ? "faq-answer open" : "faq-answer"} ml-12`}>{item.answer}</div>
                        </div>
                    ))
                }
            </div>
        </div>
        
    </section>
  )
}

export default Faq;