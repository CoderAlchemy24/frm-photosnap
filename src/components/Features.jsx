import CardBDesktop from "./CardB"
import features from "../data/features.json";
import Beta from "./Beta";


export default function Features() {
  return (
  <main className="w-full max-w-[1440px] h-full mx-auto bg-white">

    <section className="flex flex-col-reverse md:flex-row md:h-[490px] mx-auto">
      <article className="flex items-center bg-black text-white font-dm-sans md:flex-1 md:min-w-0">
     <div className="w-full max-w-[499px] px-7 py-[108px] mx-auto md:px-[54px] md:py-0 xl:px-[112px]"> 
       <h1 className="text-[32px]/[40px] tracking-[0.12em] md:text-[40px]/[48px] md:tracking-[0.18em] font-bold uppercase">Features</h1>
       <p className="mt-4 max-w-[46ch] text-[15px]/[25px] font-normal text-[var(--color-neutral-300)] md:mt-5"> We make sure all of our features are designed
                   to be loved by every aspiring and even professional
                   photograpers who wanted to share their stories.
                </p>
           </div>
      </article>
      <picture className="w-full md:w-[273px] md:h-[490px] md:shrink-0 xl:w-[830px] xl:h-[490px]">
        <source media="(min-width: 1280px)" srcSet="/assets/features/desktop/hero.jpg" />
        <source media="(min-width: 768px)" srcSet="/assets/features/tablet/hero.jpg" />
        <img src="/assets/features/mobile/hero.jpg" alt="Features hero"
          className="w-full h-[294px] object-cover md:h-full"/>
      </picture>
    </section>
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-28 xl:px-0 xl:py-32">
      <div className="w-full max-w-[1110px] mx-auto grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-18 xl:grid-cols-3 xl:gap-10">
       {features.map((feature, index) => (
         <CardBDesktop key={feature.id} index={index} />
       ))}
      </div>

    </section>
    <Beta />
  </main>)
}
