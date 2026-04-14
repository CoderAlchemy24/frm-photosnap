import { useState } from "react";

import Beta from "./Beta"
import Toggle from "./Toggle";
import ComparingTbl from "./ComparingTbl";
import ComparingTblSM from "./ComparingTblSM";
import PricingCard from "./PricingCard";


export default function Pricing() {

  const [toggle, setToggle] = useState(false);
  return (
    <main className="w-full max-w-[1440px] h-full mx-auto bg-white">

    <section className="flex flex-col-reverse md:flex-row md:h-[490px] mx-auto">
      <article className="flex items-center bg-black text-white font-dm-sans md:flex-1 md:min-w-0">
         <div className="w-full max-w-[499px] px-7 py-[72px] mx-auto md:px-[54px] md:py-0 xl:px-[112px]"> 
           <h1 className="text-[32px]/[40px] tracking-[0.12em] md:text-[40px]/[48px] md:tracking-[0.18em] font-bold uppercase">Pricing</h1>
           <p className="mt-4 max-w-[46ch] text-[15px]/[25px] font-normal text-[var(--color-neutral-300)] md:mt-5"> Create your stories. Photosnap is a platform for photographers and visual storytellers. 
                It’s the simple way to create and share your photos.
                </p>
           </div>
      </article>
      <picture className="w-full md:w-[273px] md:h-[490px] md:shrink-0 xl:w-[830px] xl:h-[490px]">
        <source media="(min-width: 1280px)" srcSet="/assets/pricing/desktop/hero.jpg" />
        <source media="(min-width: 768px)" srcSet="/assets/pricing/tablet/hero.jpg" />
        <img src="/assets/pricing/mobile/hero.jpg" alt="Pricing hero" 
          className="w-full h-[294px] object-cover md:h-full"/>
      </picture>
    </section>
    <div>
      <Toggle toggle={toggle} setToggle={setToggle} />
      <div className="w-full max-w-[1110px] mx-auto flex gap-6 px-6 py-12 justify-center flex-wrap md:px-10 xl:px-0 xl:items-end">
        <PricingCard
          title="Basic"
          description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          monthly="$19.00"
          yearly="$190.00"
          isYearly={toggle}
        />
        <PricingCard
          title="Pro"
          description="More advanced features available. Recommended for photography veterans and professionals."
          monthly="$39.00"
          yearly="$390.00"
          isYearly={toggle}
        />
        <PricingCard
          title="Business"
          description="Additional features available such as more detailed metrics. Recommended for business owners."
          monthly="$99.00"
          yearly="$990.00"
          isYearly={toggle}
        />
      </div>
      <div className="md:hidden">
        <ComparingTblSM />
      </div>
      <div className="hidden md:block">
        <ComparingTbl />
      </div>
      <Beta />
      
    </div>
  </main>
  );
}
