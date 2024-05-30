import 'flowbite';
import logo from '../../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, signOutUser, loadedUser } = useContext(AuthContext);

    const navLinks = (
        <div className='flex flex-col md:flex-row gap-5'>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "isActive" : "")}>Home</NavLink>
            <NavLink to={"/needVolunteer"} className={({ isActive }) => (isActive ? "isActive" : "")}>Need Volunteer</NavLink>
        </div>
    )

    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // Theme change
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])

    // Theme change handle 
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    return (
        <div className="navbar bg-[#001524] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow rounded-box w-52 bg-slate-800">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <div>
                        <img src={logo} alt="" className='w-8' />
                    </div>
                    <div>
                        <Link to={'/'}><h1 className="text-lg lg:text-xl">United Uplift</h1></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    navLinks
                }
            </div>
            <div className="navbar-end flex gap-4">
                <div>
                    {
                        user ?
                            <div className="dropdown dropdown-hover dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-circle">
                                    {
                                        (user?.photoURL || loadedUser?.photoURL) ?
                                            <>
                                                <img src={user?.photoURL || loadedUser?.photoURL} className='rounded-full' />
                                            </>
                                            :
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
                                    }
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52 space-y-1">
                                    <Link to={'/addvolunteer'} className='text-center btn btn-sm'>Add Volunteer Post</Link>
                                    <Link to={'/managemypost'} className='text-center btn btn-sm'>Manage My Post</Link>
                                    <button onClick={handleSignOut} className='text-center btn btn-sm'>Sign Out</button>
                                </ul>
                            </div>
                            :
                            <div>
                                <Link to={'/login'}><button className='btn'>Login</button></Link>
                            </div>
                    }
                </div>
                <div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;