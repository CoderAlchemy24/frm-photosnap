export default function PricingCard({ title, description, monthly, yearly, isYearly }) {
  const price = isYearly ? yearly : monthly;
  const sub = isYearly ? "per year" : "per month";

  return (
    <article className="w-full max-w-[327px] md:max-w-[350px] min-h-[407px] p-8 text-center 
      border border-gray-200 rounded-lg flex flex-col gap-6 bg-[var(--color-neutral-200)]
      xl:hover:relative xl:hover:top-[-20px] xl:hover:min-h-[447px] hover:bg-black hover:text-white 
     ">
      <h3 className="text-[24px]/[25px] font-bold">{title}</h3>
      <p className="text-[15px]/[25px] text-grey hover:text-white">{description}</p>

      <div className="mt-4 mx-auto">
        <div className="text-[40px]/[48px] tracking-[0.12em] font-bold">{price}</div>
        <div className="mt-1 text-[15px]/[25px] text-grey hover:text-white">{sub}</div>
      </div>

      <button className="mt-auto bg-black text-white 
        py-3 px-6 rounded-md uppercase tracking-[0.15em] text-[12px]/[16px]
        hover:bg-white hover:text-black ">
            Pick Plan
      </button>
    </article>
  );
}
