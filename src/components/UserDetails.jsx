import { useLoaderData, useNavigate } from "react-router";
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
                
                * {
                    font-family: 'Outfit', sans-serif;
                }
                
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .card-animate {
                    animation: slideUp 0.6s ease-out forwards;
                }
                
                .photo-animate {
                    animation: scaleIn 0.5s ease-out forwards;
                }
                
                .info-item {
                    transition: all 0.3s ease;
                }
                
                .info-item:hover {
                    transform: translateX(4px);
                    background: linear-gradient(to right, #f0f9ff, #e0f2fe);
                }
            `}</style>

            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden card-animate">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 font-medium"
                >
                    <ArrowLeft size={18} />
                    <span>Back</span>
                </button>
                {/* Header with Gradient */}
                <div className="bg-linear-to-r from-[#331A15] via-[#E3B577] to-[#331A15] h-32 relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 photo-animate">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                            <img
                                src={user.photo}
                                alt={user.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x400/6366f1/ffffff?text=' + user.fullName?.charAt(0);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* User Name */}
                <div className="text-center mt-20 mb-8 px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
                    <div className="w-24 h-1 bg-linear-to-r from-[#331A15] via-[#E3B577] to-[#331A15] mx-auto rounded-full"></div>
                </div>

                {/* User Details */}
                <div className="px-8 pb-10 space-y-4">
                    {/* Email */}
                    <div className="info-item flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                        <div className="shrink-0 w-12 h-12 bg-linear-to-br from-[#331A15] to-[#E3B577] rounded-xl flex items-center justify-center shadow-lg">
                            <Mail size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
                            <p className="text-gray-900 font-medium break-all">{user.email}</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="info-item flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                        <div className="shrink-0 w-12 h-12 bg-linear-to-br from-[#331A15] to-[#E3B577] rounded-xl flex items-center justify-center shadow-lg">
                            <Phone size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone Number</p>
                            <p className="text-gray-900 font-medium">{user.phone}</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="info-item flex items-start gap-4 p-5 rounded-2xl bg-gray-50">
                        <div className="shrink-0 w-12 h-12 bg-linear-to-br from-[#331A15] to-[#E3B577] rounded-xl flex items-center justify-center shadow-lg">
                            <MapPin size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Address</p>
                            <p className="text-gray-900 font-medium leading-relaxed">{user.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;