import data from "../data/data.json";
import { Link } from "react-router-dom";
export default function CardADesktop({ index }) {


   const imageUrl = (data[index]?.["image-desktop"] || "").replace?.('./', '/') || "";
   const mobileImageUrl = (data[index]?.["image-mobile"] || "").replace?.('./', '/') || "";

    return (
      <section
        className="group relative isolate z-0 h-[375px] w-full cursor-pointer overflow-hidden text-[white] transition-transform duration-300 ease-in-out hover:z-20 hover:-translate-y-[15px] md:h-[500px]"
        style={{ background: "var(--gradient-6)" }}
      >
        <div className="relative h-full">
        <picture className="absolute inset-0 z-0">
          <source media="(min-width: 768px)" srcSet={imageUrl} />
          <img src={mobileImageUrl} alt={data[index]?.title} className="w-full h-full object-cover" />
        </picture>
        <div className="card-bg relative z-10 w-full h-full overflow-hidden bg-cover bg-center"
         >  
           <div className="absolute inset-x-0 bottom-0 w-full max-w-[315px] px-8 pb-10 md:max-w-[280px] md:px-0 md:pb-8 md:left-1/2 md:-translate-x-1/2 flex flex-col items-start justify-end gap-2">    
              <h3 className="text-[13px] leading-[130%]">{data[index]?.date}</h3>
              <h2 className="font-bold text-[18px] leading-[25px]">{data[index]?.title}</h2>
              <h4 className="text-[13px] leading-[130%]">by {data[index]?.author}</h4>
              <div className="border-t border-white/25 w-full pt-5">
                
              <Link to="#" className="group flex flex-row justify-between items-center text-[12px] tracking-[0.15em] font-bold uppercase hover:text-[#BFBFBF] w-full">
                  <p className="text-[12px] leading-[135%] relative -top-1 uppercase text-white group-hover:text-[#DFDFDF]" >Read Story</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
              </Link>
              </div>
              </div>
         </div>
                </div>
      </section>
    )

}