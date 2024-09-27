import { zodResolver } from '@hookform/resolvers/zod';
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const validationSchema = z.object({
        "email": z.string().min(1, "Email is required"),
        "password": z.string().min(1, "Password is required"),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema),
    });

    const { isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(login(data));
    };

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-purple-200">
            <div className="max-w-4xl w-full p-8 shadow-2xl rounded-lg bg-white flex">
                <div className="w-1/2 hidden md:block">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                        alt="Login illustration"
                        className="w-full h-full object-cover rounded-l-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
                    <h1 className="text-4xl text-blue-700 font-bold text-center mb-6">Welcome Back!</h1>
                    <p className="text-center text-gray-500 mb-8">Login to access your account</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                className={`p-3 border w-full rounded-md shadow-md focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                className={`p-3 border w-full rounded-md shadow-md focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <button
                            className="bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            Log In
                        </button>
                    </form>
                    <div className="text-center my-4 text-gray-500">or</div>
                    <button
                        className="bg-red-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300"
                        onClick={handleGoogleLogin}
                    >
                        Log In with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
