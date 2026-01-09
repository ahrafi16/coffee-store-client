import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { Coffee } from "lucide-react";
import { useState } from "react";
// import bg from '../../public/images/more/1.png';

const Home = () => {
    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);
    return (
        <div >
            <div className="">
                {/* <img className="max-w-screen object-cover rounded-b-3xl" src={bg} alt="" /> */}
                <div className="flex  flex-col gap-3 items-center my-6">
                    <p className="text-xl">---Sip & Savor---</p>
                    <h2 className="text-3xl font-semibold rancho-regular">Our Popular Products</h2>
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
        </div>
    );
};

export default Home;