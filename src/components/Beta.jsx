import { Link } from "react-router-dom";

export default function Beta() {
    const desktopImageUrl = '/assets/shared/desktop/bg-beta.jpg';
    const tabletImageUrl = '/assets/shared/tablet/bg-beta.jpg';
    const mobileImageUrl = '/assets/shared/mobile/bg-beta.jpg';

    return (
      <section className="relative w-full max-w-[1440px] min-h-[288px] px-6 py-16 flex items-center justify-center mx-auto overflow-hidden md:min-h-[280px] md:px-10 xl:px-[165px]">
      <picture className="absolute inset-0">
        <source media="(min-width: 1280px)" srcSet={desktopImageUrl} />
        <source media="(min-width: 768px)" srcSet={tabletImageUrl} />
        <img src={mobileImageUrl} alt="" aria-hidden="true" className="h-full w-full object-cover" />
      </picture>
      <div className="relative z-10 w-full max-w-[1110px] text-white flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="w-full max-w-[400px] text-[32px]/[40px] font-bold uppercase">We're in beta,<br/> get your invite<br/> today!</h2>
      

        <Link to="#" className="group flex flex-row items-center text-[12px] tracking-widest font-bold text-white hover:text-[grey] gap-5 md:self-center ">
          <span className="relative -top-1 uppercase text-white group-hover:text-[grey]" >Get an invite</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
        </Link>
      </div>
      
    </section>
   
   
    )}