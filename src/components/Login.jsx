import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="p-5 max-w-[500px] mx-auto">
            <div className="flex items-center mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-transparent border-none text-2xl cursor-pointer p-2.5"
                >
                    ←
                </button>
                <h1 className="text-xl font-semibold">Log In Your Account</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2 text-gray-600">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address here"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-gray-600">Password</label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password here"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
                        >
                            👁
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-black text-white rounded-full cursor-pointer mt-5 hover:bg-gray-800 transition-colors"
                >
                    Log in
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-gray-600">
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-black underline cursor-pointer bg-transparent border-none"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login; 