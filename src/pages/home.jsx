export default function Home(){
    return(
        <div className="text-primery relative w-full lg:container mx-auto h-full">
            <footer className="absolute bottom-8 inset-x-0 h-8 flex flex-row items-center justify-between">
                <img src="/svg/category.svg" alt="" className="w-5/6  ml-2"/>
                <img src="/svg/basketCart.svg" alt="" className="w-1/6 "/>
            </footer>
        </div>
    );
}