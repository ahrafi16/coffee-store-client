import { Eye, Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";


const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (id) => {
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

                fetch(`https://coffee-store-server-psi-topaz.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });

                            // remove deleted user from UI
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    })


            }
        });
    }

    return (
        <div className="px-6 my-8 md:px-28">
            <h2 className="text-2xl rancho-regular my-3">Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.address}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email ? user.email : 'N/A'}
                                    </td>
                                    <td>{user.phone}</td>
                                    <th>
                                        <Link to={`/users/${user._id}`}>
                                            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="btn mx-1 p-1 "><Eye /></button>
                                        </Link>

                                        <button className="btn mx-1 p-1 "><Pencil /></button>
                                        <button onClick={() => handleDelete(user._id)} className="btn mx-1 p-1 hover:bg-[#EA4744] hover:text-white"><Trash /></button>
                                    </th>
                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;