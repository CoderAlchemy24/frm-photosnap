import features from "../data/features.json";
export default function CardBDesktop({ index }) {
   
    const iconUrl = features[index]?.icon || '';
     
    return (
      <section className="w-full max-w-[350px] mx-auto flex flex-col items-center justify-between gap-4 text-center">
        
           <img src={iconUrl} alt={features[index]?.title} className="w-[72px] h-auto space-y-2 m-8"/>
           <div className="w-full max-w-[250px] min-h-[116px]">
             <h2 className="text-[22px]/[30px] font-bold mb-4">{features[index]?.title}</h2>
             <p className="text-[14px]/[22px] text-gray-500">{features[index]?.description}</p>
           </div>
        
      </section>
    )
}
