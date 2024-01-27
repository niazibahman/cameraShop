export default function Footer(){
    return(
    <footer className="fixed bottom-4 inset-x-0 grid grid-cols-10 gap-2">
        <div className="hidden lg:flex col-span-8 ">
            <img src="/svg/category.svg" alt="" className="w-full "/>
        </div>
        <div className="col-span-2 col-start-9">
            <img src="/svg/basketCart.svg" alt="" className="w-full"/>
        </div>
    </footer>
    );
}