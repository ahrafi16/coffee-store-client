import { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";


const SignIn = () => {
    const navigate = useNavigate();
    const { signInUser } = use(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // send to firebase
        signInUser(email, password)
            .then(result => {
                // console.log(result.user);
                const signInInfo = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                // update last signin time to the database
                fetch('http://localhost:3000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(signInInfo)
                })
                // .then(res => res.json())
                // .then(data => {
                //     console.log("After update patch", data)
                // })
                Swal.fire({
                    icon: "success",
                    title: "Login successful",
                    timer: 1500,
                    showConfirmButton: false
                });

                navigate("/");

            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Login failed",
                    text: error.message
                });
            })


    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

                <form onSubmit={handleSignIn} className="space-y-4">


                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#E3B577] cursor-pointer hover:text-white hover:bg-[#331A15] rancho-regular text-[#331A15] py-2 rounded-lg  transition duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Dont have an account?{" "}
                    <Link to="/signup">
                        <span className="text-blue-600 cursor-pointer hover:underline">
                            Sign Up
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;