import { NavLink } from "react-router-dom";

export default function Home() {
  return (
  <main className="w-full max-w-[1440px] h-full mx-auto my-0">
      <section className="flex flex-col-reverse md:flex-row md:h-[650px] xl:h-[650px] mx-auto">
        <article className="flex items-center bg-black text-white md:flex-1 md:min-w-0 xl:h-[650px] xl:basis-[610px] xl:shrink-0" >
          <div className="w-full max-w-[387px] px-6 py-20 mx-auto md:px-[54px] md:py-0 xl:h-[303px] xl:px-0 xl:py-0 xl:my-44 xl:ml-24 xl:mr-0">
            <h1 className="text-5xl font-bold uppercase mb-[20px]">Create and <br/>share your <br/> photo Stories</h1>
            <p className="text-[var(--color-neutral-300)] text-[15px] font-normal mb-[46px]">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
            <NavLink to="/stories" className="group flex flex-row gap-4 text-[15px] tracking-widest font-bold hover:text-[grey]">
                  <span className="relative -top-1 uppercase text-white group-hover:text-[grey]" >Get an invite</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
            </NavLink>
          </div>
        </article> 
        <picture className="w-full md:w-[273px] md:shrink-0 md:h-[650px] xl:basis-[830px] xl:w-auto xl:shrink-0">
          <source media="(min-width: 1280px)" srcSet="/assets/home/desktop/create-and-share.jpg" />
          <source media="(min-width: 768px)" srcSet="/assets/home/tablet/create-and-share.jpg" />
          <img src="/assets/home/mobile/create-and-share.jpg" alt="hero image1"
            className="w-full h-[294px] object-cover md:h-full xl:h-full"/>
        </picture>
     </section>
     <section className="flex flex-col md:flex-row md:h-[650px] xl:h-[650px]">
        <picture className="w-full md:w-[273px] md:h-[650px] md:shrink-0 xl:basis-[830px] xl:w-auto xl:shrink-0">
          <source media="(min-width: 1280px)" srcSet="/assets/home/desktop/beautiful-stories.jpg" />
          <source media="(min-width: 768px)" srcSet="/assets/home/tablet/beautiful-stories.jpg" />
          <img src="/assets/home/mobile/beautiful-stories.jpg"
           alt="hero image2"
              className="w-full h-[294px] object-cover md:h-full xl:h-full"/>
        </picture>
        <article className="flex items-center bg-white text-black md:flex-1 md:min-w-0 xl:h-[650px] xl:basis-[610px] xl:shrink-0" >
          <div className="w-full max-w-[387px] px-6 py-20 mx-auto md:px-[54px] md:py-0 xl:h-[303px] xl:px-0 xl:py-0 xl:my-44 xl:ml-24 xl:mr-0">
            <h2 className="text-5xl font-bold uppercase mb-[20px]">Beautiful stories every time</h2>
            <p className="text-[var(--color-neutral-950)] text-[15px] font-normal mb-[46px]">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
            <NavLink to="/features" className="group flex flex-row gap-4 text-[15px] tracking-widest font-bold hover:text-[var(--color-neutral-300)]">
                  <span className="relative -top-1 uppercase text-black group-hover:text-[var(--color-neutral-300)]" >Get an invite</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
            </NavLink>
          </div>
        </article>
     </section>
     <section className="flex flex-col-reverse md:flex-row md:h-[600px] xl:h-[650px]">
        <article className="flex items-center bg-white text-black md:flex-1 md:min-w-0 xl:h-[650px] xl:basis-[610px] xl:shrink-0" >
          <div className="w-full max-w-[387px] px-6 py-20 mx-auto md:px-[54px] md:py-0 xl:h-[303px] xl:px-0 xl:py-0 xl:my-44 xl:ml-24 xl:mr-0">
          <h2 className="text-5xl font-bold uppercase mb-[20px]">Designed for everyone</h2>
              <p className="text-[var(--color-neutral-950)] text-[15px] font-normal mb-[46px]">
                Photosnap can help you create stories that resonate with your audience.  Our 
                 tool is designed for photographers of all levels, brands, businesses you name it. </p>
              <NavLink to="/pricing" className="group flex flex-row gap-4 text-[15px] tracking-widest font-bold hover:text-[var(--color-neutral-300)]">
                    <span className="relative -top-1 uppercase text-[var(--color-neutral-950)] group-hover:text-[var(--color-neutral-300)]" >Get an invite</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
              </NavLink>
            </div>
        </article> 
          <picture className="w-full md:w-[273px] md:h-[650px] md:shrink-0 xl:basis-[830px] xl:w-auto xl:shrink-0">
          <source media="(min-width: 1280px)" srcSet="/assets/home/desktop/designed-for-everyone.jpg" />
          <source media="(min-width: 768px)" srcSet="/assets/home/tablet/designed-for-everyone.jpg" />
          <img src="/assets/home/mobile/designed-for-everyone.jpg" alt="hero image3"
            className="w-full h-[294px] object-cover md:h-full xl:h-full"/>
        </picture>
     </section>
    </main>
);
}
