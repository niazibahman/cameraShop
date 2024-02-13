import Footer from "../components/footer";
import data from "../data/cameraBrand.json";

export default function Home(){
    return(
        <div className="w-full lg:container h-full lg:overflow-y-hidden px-4 flex-grow">
            <img src="/svg/menu.svg" alt="" className="absolute top-3 right-4 w-5 h-5 lg:hidden"/>
            <div className="w-full max-w-7xl bg-red-200 bg-opacity-20 h-full mx-auto relative flex-grow">
                <Footer/>
            </div>
        </div>
    );
}

            {/* <hr className="border-primery h-2 absolute top-1/4 inset-x-0"/>
            <div className="absolute top-[27%] mt-10 inset-x-0">
                <img src="/svg/fence.svg" alt="" className="w-full object-cover h-16 lg:h-24"/>
            </div>
            <div className="text-primery relative w-full lg:container h-full">
                <img src="/image/canon_watermark.png" alt="" className="w-full absolute top-8"/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-24 lg:mt-32">
                    <div className="col-span-1 z-10 flex flex-col items-center justify-center">
                        <img src="/image/cannon-eos-r5.png" alt="" className="w-9/12 lg:w-full"/>
                    </div>
                    <div className="col-span-1 h-52 lg:mt-56 z-10 border-2 border-primery rounded-lg flex flex-col items-center justify-between py-2 lg:text-lg">
                        <h2>دوربین دیجیتال کانن</h2>
                        <div className="flex flex-row items-center justify-center">
                            <span>مدل دوربین:</span>
                            <span className="font-bold mr-1">CANON EOS R5</span>
                        </div>
                        <div className="w-full h-12 grid grid-cols-2 gap-2 px-4">
                            <div className="col-span-1 rounded-3xl border-2 border-primery flex flex-row items-center justify-between px-2">
                                <div className="flex flex-row items-center">
                                    <img src="/svg/lense.svg" alt="" className="w-5 h-5 ml-1"/>
                                    <span>دقت حسگر:</span>
                                </div>
                                <span className="font-iransansbold">20 مگاپیکسل</span>
                            </div>
                            <div className="col-span-1 rounded-3xl border-2 border-primery flex flex-row items-center justify-between px-2">
                                <div className="flex flex-row items-center">
                                    <img src="/svg/zoom.svg" alt="" className="w-5 h-5 ml-1"/>
                                    <span>قدرت زوم:</span>
                                </div>
                                <span className="font-iransansbold">6 تا 10 برابر</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center justify-between px-4">
                            <div className="flex flex-row items-center">
                                <img src="/svg/ip67.svg" alt="" className="h-10"/>
                                <img src="/svg/4k.svg" alt="" className=" h-10"/>
                            </div>
                            <div className="flex flex-row items-center">
                                <button className="h-10 w-36 rounded-lg border-2 border-primery ml-2">جزئیات بیشتر</button>
                                <button className="h-10 w-36 rounded-lg bg-primery text-dark">افزودن به سبد خرید</button>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* <ul className="w-full flex flex-row items-center px-4">
                        {
                            data.map((item,index)=><li key={index}>{item.name}</li>)
                        }
                    </ul> }
                <Footer/>
            </div> */}