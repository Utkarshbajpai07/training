// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { logOut } from '../redux/slices/authSlice';

const Navbar = () => {
    const { isAuth, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <nav className='flex justify-between items-center bg-sky-950 px-8 py-4 shadow-lg w-full'>
            {/* Logo */}
            <div className='text-white text-3xl font-bold tracking-wider cursor-pointer'>
                Logo
            </div>

            {/* Search Bar */}
            <div className='flex-1 mx-6'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='w-full max-w-sm p-2 rounded-lg border border-gray-300 bg-sky-900 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-sky-400 transition duration-300'
                />
            </div>

            {/* Links and Buttons */}
            <div className='flex gap-6 items-center'>
                {isAuth ? (
                    role === "User" ? (
                        <div className='flex gap-5 text-white'>
                            <Link to="/cart" className='hover:text-sky-300 transition duration-300'>Cart</Link>
                            <Link to="/myorder" className='hover:text-sky-300 transition duration-300'>My Orders</Link>
                            <Link to="/profile" className='hover:text-sky-300 transition duration-300'>Profile</Link>
                        </div>
                    ) : (
                        <div className='flex gap-5 text-white'>
                            <Link to="/dashboard" className='hover:text-sky-300 transition duration-300'>Dashboard</Link>
                            <Link to="/adminUser" className='hover:text-sky-300 transition duration-300'>Users</Link>
                            <Link to="/adminProduct" className='hover:text-sky-300 transition duration-300'>Products</Link>
                            <Link to="/adminOrder" className='hover:text-sky-300 transition duration-300'>Orders</Link>
                            <Link to="/profile" className='hover:text-sky-300 transition duration-300'>Profile</Link>
                        </div>
                    )
                ) : (
                    <div className='flex gap-5 text-white'>
                        <Link to="/cart" className='hover:text-sky-300 transition duration-300'>Cart</Link>
                        <Link to="/login" className='hover:text-sky-300 transition duration-300'>Login</Link>
                        <Link to="/signup" className='hover:text-sky-300 transition duration-300'>Signup</Link>
                    </div>
                )}

                {/* Logout Button */}
                {isAuth && (
                    <button
                        className='text-xl text-white p-2 hover:bg-sky-900 rounded-full transition duration-300'
                        onClick={handleLogOut}
                        title='Log Out'
                    >
                        <FiLogOut />
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
