import { Link } from 'react-router-dom';
import CardA from './CardA';
import data from '../data/data.json'
export default function Stories(){
   
    return (
        <section className="mx-auto w-full max-w-[1440px] flex flex-col items-center justify-start bg-black md:bg-white">
          <picture className="block w-full md:hidden">
            <img
              src="/assets/stories/mobile/moon-of-appalacia.jpg"
              alt="Hazy full moon of Appalachia"
              className="w-full h-[317px] object-cover"
            />
          </picture>
          <header className="relative w-full bg-black md:h-[650px] md:bg-transparent">
                <picture className="hidden md:block absolute inset-0">
                  <source media="(min-width: 1280px)" srcSet="/assets/stories/desktop/moon-of-appalacia.jpg" />
                  <source media="(min-width: 768px)" srcSet="/assets/stories/tablet/moon-of-appalacia.jpg" />
                  <img src="/assets/stories/mobile/moon-of-appalacia.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </picture>
                <div className='relative z-10 text-[white] w-full max-w-[387px] px-7 py-12 mx-auto flex flex-col items-start justify-center gap-6 md:mx-0 md:gap-8 md:px-10 md:py-[122px] xl:pl-[112px] xl:pr-0'>
                    <div className='flex flex-col gap-4 md:gap-6'>
                        <p className='uppercase text-[12px] leading-[135%] font-bold tracking-[0.15em]'>Last month's featured story</p>
                        <h1 className='uppercase text-[32px] leading-[40px] tracking-[0.12em] md:text-[40px] md:leading-[48px] md:tracking-[0.18em] font-bold'>Hazy full moon of Appalachia</h1>
                    </div>
                    <div className='w-full flex flex-col items-start justify-center gap-6'>
                    <p className='text-[13px]/[17px] text-[#CFCFCF]'>March 2nd 2020 <span className='text-white'>by John Appleseed</span></p>
                    <p className='text-[15px]/[25px] text-[#CFCFCF]'>The dissected plateau area, while not actually made up of geological mountains, 
                    is popularly called "mountains" especially in eastern Kentucky and West Virginia, 
                    and while the ridges are not high, the terrain is extremely rugged.
                     </p>
                    <Link to="#" className="group flex flex-row gap-4 text-[12px] tracking-[0.15em] font-bold uppercase hover:text-[grey]">
                       <span className="relative -top-1 uppercase text-white group-hover:text-[grey]" >Read the story</span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </Link> 
                    </div>
                </div>
            
        </header>
        
        <main className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-0 bg-white'>
          {data.map((item, index)=>
            <CardA key={index} index={index} />
          )}
        </main>
        </section>
    )
}