import { Link } from "react-router";
import bg from "/images/more/3.png";

const Banner = () => {
    return (
        <div
            className="w-full flex justify-end h-screen bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="w-full flex mx-auto justify-end max-w-7xl">
                <div className="max-w-2xl flex flex-col items-start justify-center p-3 gap-5 text-white">
                    <h2 className="text-4xl rancho-regular">Would you like a Cup of Delicious Coffee?</h2>
                    <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className="flex gap-2">
                        <Link to="/"><button className="btn hover:border-2 hover:border-white bg-[#E3B577] flex items-center hover:text-white hover:bg-[#331A15] rancho-regular" >Learn more</button></Link>
                        <Link to="/users"><button className="btn hover:border-2 hover:border-white bg-[#E3B577] flex items-center hover:text-white hover:bg-[#331A15] rancho-regular" >Users</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
