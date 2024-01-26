import Footer from "../components/footer";

export default function Home(){
    return(
        <>
            <img src="/svg/menu.svg" alt="" className="absolute top-4 right-4 w-8 h-8 lg:hidden"/>
            <div className="text-primery relative w-full lg:container h-full">
                <Footer/>
            </div>
        </>
    );
}