import React from 'react';
import Container from '../Container';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navigation = <>
        <li className='text-xl font-semibold '>
            <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className='text-xl font-semibold '>
            <NavLink
                to='/instructors'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Colleges
            </NavLink>
        </li>
        <li className='text-xl font-semibold '>
            <NavLink
                to='/classes'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                Admission
            </NavLink>
        </li>
        <li className='text-xl font-semibold '>
            <NavLink
                to='/classes'
                className={({ isActive, isPending }) =>
                    isActive
                        ? "text-primary"
                        : isPending
                            ? "text-secondary"
                            : ""
                }
            >
                My College
            </NavLink>
        </li>
    </>

    return (
        <Container>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navigation}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl grid grid-row-2">
                        <h1 className='text-2xl font-bold text-primary text-center'>BookingHub</h1>
                        <p className='text-sm text-secondary text-center'>College Booking Hub</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigation}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-primary text-white rounded-full">Button</button>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;