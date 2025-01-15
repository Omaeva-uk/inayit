import { useEffect } from "react";



const ServicePageHero = ({service}) => {

    // useEffect(() => {
    //     document.querySelector("#service-head").innerHTML.split(" ")[1].color = "blue";
        
      
    // }, [])
    
   



  return (
    <section className="mt-20 px-8">
        <div className="flex flex-col items-center text-center">
            <h1 id="service-head" className=" leading-[120%] font-geist text-gray-900 text-6xl">{service.serviceName}</h1>
            <div className={`w-full h-full ${service.serviceImgClassname}`}><img src={service.serviceImg} alt="serivce-image" className=" object-cover object-center w-full" /></div>
            <p className="max-w-md text-lg text-gray-500">{service.servicePara}</p>
        </div>
    </section>
  )
}

export default ServicePageHero;