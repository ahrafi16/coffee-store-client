import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { Coffee } from "lucide-react";
import { useState } from "react";
import bg from '/images/more/1.png';
import FollowUs from "../homeComponents/FollowUs";
import Banner from "../homeComponents/Banner";
import Features from "../homeComponents/Features";

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <div style={{ backgroundImage: `url(${bg})` }} className="my-16 px-6 md:px-28">
                <div className="flex  flex-col gap-3 items-center my-6">
                    <p className="text-xl">---Sip & Savor---</p>
                    <h2 className="text-3xl font-extrabold rancho-regular">Our Popular Products</h2>
                    <Link to="/addCoffee"><button className="btn border-2 border-[#331A15] bg-[#E3B577] flex items-center rancho-regular" >Add Coffee <Coffee className="text-[#331A15] " /></button></Link>
                </div>
                <div className="grid my-6 grid-cols-1 md:grid-cols-2 gap-6">
                    {coffees.map(coffee => (
                        <CoffeeCard
                            key={coffee._id}
                            coffees={coffees}
                            setCoffees={setCoffees}
                            coffee={coffee}></CoffeeCard>
                    ))}
                </div>
            </div>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;