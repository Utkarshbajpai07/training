import { zodResolver } from '@hookform/resolvers/zod';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { signup } from '../redux/slices/authSlice';

const Signup = () => {
    const validationSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().min(1, "Email is required").email("Invalid Email"),
        password: z.string()
            .min(8, "Password must be of at least 8 letters")
            .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
            .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
            .regex(/[0-9]/, "Password must contain at least 1 number")
            .regex(/[\W_]/, "Password must contain at least 1 special character"),
        phoneNumber: z.string().min(10, "Phone number must contain 10 digits").max(10, "Phone number must contain 10 digits"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        dispatch(signup(data));
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-blue-200">
            <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                        alt="Signup"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-4xl text-blue-600 font-bold text-center mb-4">Create an Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className={`p-3 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register("name")}
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className={`p-3 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register("email")}
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className={`p-3 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register("password")}
                                />
                                {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    className={`p-3 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register("phoneNumber")}
                                />
                                {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
