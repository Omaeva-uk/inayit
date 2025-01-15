import { Icon } from "@mui/material";


const ServicePageInfo = ({service}) => {

    //console.log(service);


  return (
    <section className="my-32 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {
                service.map((card,i) => (
                    <div key={i} className="shadow-[0px_4px_42px_-2px_rgba(0,_0,_0,_0.1)] overflow-hidden rounded-xl">
                        <div className="flex border  border-blue-100  justify-around h-full flex-col gap-7 items-center text-center p-6">
                            <div className="p-5 bg-[#e0e8ff]  rounded-full w-[70px] h-[70px]"><i class={`fa-solid ${card.infoIcon} text-2xl text-primary`}></i></div>
                            <h4 className="text-xl leading-[130%] font-semibold text-gray-700">{card.infoHeading}</h4>
                            <p className="text-gray-500 text-sm">{card.infoPara}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ServicePageInfo;