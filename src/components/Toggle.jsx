export default function Toggle({ toggle, setToggle }) {
  const handleToggle = (e) => {
    e?.preventDefault();
    setToggle((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setToggle((prev) => !prev);
    }
  };

  return (<section className="flex flex-row items-center justify-center gap-6 px-6 py-8 md:py-10">
    
    <span className={`text-sm ${toggle ? 'text-[#9F9F9F]' : 'text-black'} 
           text-[15px]/[25px] md:text-[18px]/[25px] font-bold`}>Monthly</span>
    <button
      type="button"
      role="switch"
      aria-checked={toggle}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={`w-[64px] h-[32px] rounded-full relative transition-colors duration-200  ${
        toggle ? 'bg-[#000000] text-black' : 'bg-[#EFEFEF] text-white'
      }`}
    >
      <span
        className={`absolute top-1 left-0 h-6 w-6  rounded-full shadow transform transition-transform duration-200 ${
          toggle ? 'translate-x-9 bg-white' : 'translate-x-1 bg-black'
        } `}
      />
    </button>
    <span className={`text-sm ${toggle ? 'text-black' : 'text-[#BFBFBF]'}
          text-[15px]/[25px] md:text-[18px]/[25px] font-bold`}>Yearly</span>
    </section>
  );
}