import { ArrowLeft } from "lucide-react";
import { Link, useLoaderData } from "react-router";


const CoffeeDetails = () => {
    const coffee = useLoaderData();
    return (
        <div className="p-6 justify-items-center md:px-28">
            <Link to="/"><p className='rancho-regular text-xl my-3 flex gap-2 items-center hover:bg-[#D2B48C] cursor-pointer px-5 py-2 rounded-xl w-fit'> <ArrowLeft /> Back to Home</p></Link>
            <div className="bg-[#F4F3F0] rounded-2xl flex w-fit justify-center gap-8 items-center p-8">
                <div className="">
                    <img className="rounded-2xl w-96 hover:scale-105 duration-300" src={coffee.photo} alt="" />
                </div>
                <div className="space-y-3 text-2xl">
                    <h1 className="rancho-regular font-bold">{coffee.name}</h1>
                    <p className="text-gray-500"><span className="text-black font-semibold">Name :</span> {coffee.name}</p>
                    <p className="text-gray-500"><span className="text-black font-semibold">Taste :</span> {coffee.taste}</p>
                    <p className="text-gray-500"><span className="text-black font-semibold">Price :</span> {coffee.price}</p>
                    <p className="text-gray-500"><span className="text-black font-semibold">Supplier :</span> {coffee.supplier}</p>
                    <p className="text-gray-500"><span className="text-black font-semibold">Category :</span> {coffee.category}</p>
                    <p className="text-gray-500"><span className="text-black font-semibold">Details :</span> {coffee.details}</p>
                </div>
            </div>

        </div>
    );
};

export default CoffeeDetails;