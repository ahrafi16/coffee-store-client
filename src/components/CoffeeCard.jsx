import { Eye, Pen, Trash } from 'lucide-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, name, taste, price } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            // remove deleted coffee from UI
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainingCoffees);
                        }
                    })


            }
        });
    }

    return (
        <div className="p-3 rounded-xl flex items-center gap-6 bg-[#F5F4F1]">
            <figure className='rounded-md'>
                <img
                    className="w-50 rounded-md"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex  justify-between w-full items-center">
                <div className='flex flex-col gap-2'>
                    <h2 className="card-title text-black">Name : <span className="text-gray-500">{name}</span></h2>
                    <h2 className="card-title text-black">Taste : <span className="text-gray-500">{taste}</span></h2>
                    <h2 className="card-title text-black">Price : <span className="text-gray-500">{price}</span></h2>
                </div>

                <div className="card-actions flex flex-col gap-2">
                    <Link
                        to={`/coffee/${_id}`}
                        className='bg-[#D2B48C] rounded-md p-1 text-white'>
                        <Eye />
                    </Link>
                    <Link
                        className='bg-[#3C393B] rounded-md p-1 text-white'
                        to={`/updateCoffee/${_id}`}>
                        <Pen />
                    </Link>
                    <Link onClick={() => handleDelete(_id)}
                        className='bg-[#EA4744] rounded-md p-1 text-white'>
                        <Trash />
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default CoffeeCard;