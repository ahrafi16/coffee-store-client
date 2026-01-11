import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";
import Header from "./Header";

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className="flex items-center justify-center">
                <div className="text-center flex flex-col items-center justify-center">
                    <a
                        href="/"
                        className="rancho-regular text-xl my-3 flex gap-2 items-center hover:bg-[#D2B48C] hover:text-white cursor-pointer px-5 py-2 rounded-xl justify-center w-fit"
                    >
                       <ArrowLeft></ArrowLeft> Back to Home
                    </a>
                    <img
                        src="/images/404/404.gif"
                        alt="404 Error"
                        className="mx-auto mb-8  w-full"
                    />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;