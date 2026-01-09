import { useLoaderData } from "react-router";


const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log("Coffee details loaded:", coffee);
    return (
        <div>
            <h1 className="text-red-900 text-9xl">Coffee Name : {coffee.name}</h1>
            <p>Coffee Taste : {coffee.taste}</p>
            <p>Price : {coffee.price}</p>
            <p>Coffee Supplier : {coffee.supplier}</p>
        </div>
    );
};

export default CoffeeDetails;