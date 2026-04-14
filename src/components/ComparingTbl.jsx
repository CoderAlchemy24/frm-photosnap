const Check = () => (
    <img
        src="/assets/pricing/desktop/check.svg"
        alt="exists"
        className="mx-auto w-4 h-4"
    />
);

export default function ComparingTbl() {
  
    return (    
        <section className="w-full max-w-[1440px] h-full mx-auto px-6 py-12 md:px-10 xl:px-0">
            <h1 className="text-[32px]/[40px] md:text-[40px]/[48px] font-bold uppercase text-center my-[56px]">Compare</h1>
                        <div className="w-full overflow-x-auto">
                        <table className="w-[731px] h-[552px] mx-auto my-[160px] font-dm-sans text-[12px]/[135%] mt-8">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="theader uppercase text-left p-4">The Features</th>
                                        <th className="theader uppercase text-center p-6">Basic</th>
                                        <th className="theader uppercase text-center p-4">Pro</th>
                                        <th className="theader uppercase text-center p-4 ">Business</th>
                                    </tr>
                                </thead>
                <tbody>
                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Unlimited Story Posting</td>
                    <td className="tdata p-4 text-center"><Check /></td>
                    <td className="tdata p-4 text-center"><Check /></td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>
                    
                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Unlimited Photo Upload</td>
                    <td className="tdata p-4 text-center"><Check /></td>
                    <td className="tdata p-4 text-center"><Check /></td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>

                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Embedding Custom Content</td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"><Check /></td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>

                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Customize Meta Data</td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"><Check /></td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>

                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Advanced Metrics</td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>
                    
                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Photo Downloads</td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>

                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Search Engine Indexing</td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>

                    <tr><td className="trow uppercase p-4 font-dm-sans text-[12px]/[135%] font-bold">Custom Analytics</td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"> </td>
                    <td className="tdata p-4 text-center"><Check /></td></tr>

                </tbody>
            </table>
            </div>
        </section>


    )
}