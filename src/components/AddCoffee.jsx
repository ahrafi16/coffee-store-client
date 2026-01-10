import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        if (!newCoffee.name) return;


        // send data to the db
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log("After adding data to the DB", data);
                Swal.fire({
                    title: "Coffee added successfully!",
                    icon: "success",
                    draggable: true
                });
                form.reset();
            })

    }
    return (
        <div className='py-12 md:px-28'>
            <Link to="/"><p className='rancho-regular text-xl my-3 flex gap-2 items-center hover:bg-[#D2B48C] cursor-pointer px-5 py-2 rounded-xl w-fit'> <ArrowLeft /> Back to Home</p></Link>
            <div className="p-12 text-center space-y-4 bg-[#F4F3F0] border border-gray-300 rounded-md">
                <div className="p-6 space-y-6">
                    <h1 className="text-5xl rancho-regular font-bold text-[#374151]">Add New Coffee</h1>
                    <p className="text-gray-500">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee}>
                    <div className="flex gap-6">
                        <fieldset className="fieldset w-full">
                            <label className="label font-semibold text-gray-700">Name</label>
                            <input type="text" name="name" className="input w-full focus:outline-none" placeholder="Enter Coffee Name" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <label className="label font-semibold text-gray-700">Price</label>
                            <input type="text" name="price" className="input w-full focus:outline-none" placeholder="Enter price of coffee" />
                        </fieldset>
                    </div>
                    <div className="flex gap-6">
                        <fieldset className="fieldset w-full">
                            <label className="label font-semibold text-gray-700">Supplier</label>
                            <input type="text" name="supplier" className="input w-full focus:outline-none" placeholder="Enter Coffee Supplier" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <label className="label font-semibold text-gray-700">Taste</label>
                            <input type="text" name="taste" className="input w-full focus:outline-none" placeholder="Enter Coffee Taste" />
                        </fieldset>
                    </div>
                    <div className="flex gap-6">
                        <fieldset className="fieldset w-full">
                            <label className="label font-semibold text-gray-700">Category</label>
                            <input type="text" name="category" className="input w-full focus:outline-none" placeholder="Enter Coffee Category" />
                        </fieldset>
                        <fieldset className="fieldset w-full">
                            <label className="label font-semibold text-gray-700">Details</label>
                            <input type="text" name="details" className="input w-full focus:outline-none" placeholder="Enter Coffee Details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset my-3 w-full">
                        <label className="label font-semibold text-gray-700">Photo</label>
                        <input type="text" name="photo" className="input w-full focus:outline-none" placeholder="Enter Photo URL" />
                    </fieldset>
                    <button className="btn btn-block rancho-regular border-[#331A15] bg-[#D2B48C] font-semibold text-[#331A15]">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;