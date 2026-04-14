import { Fragment } from "react";
import clsx from "clsx";

const Check = () => (
    <img
        src="/assets/pricing/desktop/check.svg"
        alt="exists"
        className="mx-auto w-4 h-4"
    />
);

const plans = ["Basic", "Pro", "Business"];

const features = [
    {
        name: "Unlimited Story Posting",
        availability: { Basic: true, Pro: true, Business: true },
    },
    {
        name: "Unlimited Photo Upload",
        availability: { Basic: true, Pro: true, Business: true },
    },
    {
        name: "Embedding Custom Content",
        availability: { Basic: false, Pro: true, Business: true },
    },
    {
        name: "Customize Meta Data",
        availability: { Basic: false, Pro: true, Business: true },
    },
    {
        name: "Advanced Metrics",
        availability: { Basic: false, Pro: false, Business: true },
    },
    {
        name: "Photo Downloads",
        availability: { Basic: false, Pro: false, Business: true },
    },
    {
        name: "Search Engine Indexing",
        availability: { Basic: false, Pro: false, Business: true },
    },
    {
        name: "Custom Analytics",
        availability: { Basic: false, Pro: false, Business: true },
    },
];

export default function ComparingTblSM() {
  
    return (    
        <section className="w-full max-w-[1440px] h-full mx-auto px-6 py-12 md:px-10 xl:px-0">
            <h1 className="text-[32px]/[40px] md:text-[40px]/[48px] font-bold uppercase text-center my-[56px]">Compare</h1>
            <div className="w-full max-w-sm mx-auto">
                <h2 className="text-[16px]/[32px] font-bold uppercase text-left my-[8px] pb-4
                    border-b border-[var(--color-neutral-950)]">The Features</h2>
                <table className="w-full mx-auto font-dm-sans text-[12px]/[135%] mt-4 border-collapse">
                    <tbody>
                        {features.map((feature) => (
                            <Fragment key={feature.name}>
                                <tr className="border-b border-[var(--color-neutral-200)]">
                                    <td colSpan={3} className="trow uppercase px-0 py-6 font-dm-sans text-[12px]/[135%] font-bold tracking-[0.17em]">
                                        {feature.name}
                                    </td>
                                </tr>
                                <tr className="border-b border-[var(--color-neutral-200)]">
                                    {plans.map((plan) => (
                                        <td key={plan} className={clsx("tdata pt-4 pb-6 text-center align-top", { "pl-10 pr-6": plan === "Pro" })}>
                                            <span className="mb-2 block text-center text-[10px]/[13px] font-bold uppercase tracking-[0.17em] text-black/50">
                                                {plan}
                                            </span>
                                            <div className="flex min-h-4 items-center justify-center">
                                                {feature.availability[plan] ? <Check /> : null}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>


    )
}