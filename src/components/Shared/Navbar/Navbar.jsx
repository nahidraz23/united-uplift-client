import 'flowbite';
import logo from '../../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const navLinks = (
        <div className='flex flex-col md:flex-row gap-5'>
            <Link to={"/"}>Home</Link>
            <Link to={"/needVolunteer"}>Need Volunteer</Link>
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
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                        <a className="text-xl">United Uplift</a>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    navLinks
                }
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user ?
                        // <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        //     <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        //         <span className="sr-only">Open user menu</span>
                        //         <img className="w-8 h-8 rounded-full" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="user photo" />
                        //     </button>
                        //     {/* <!-- Dropdown menu --> */}
                        //     <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        //         <div className="px-4 py-3">
                        //             <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        //             <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        //         </div>
                        //         <ul className="py-2" aria-labelledby="user-menu-button">
                        //             <li>
                        //                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        //             </li>
                        //             <li>
                        //                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        //             </li>
                        //             <li>
                        //                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        //             </li>
                        //             <li>
                        //                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        //             </li>
                        //         </ul>
                        //     </div>
                        //     <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        //         <span className="sr-only">Open main menu</span>
                        //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        //         </svg>
                        //     </button>
                        // </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full'/>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-1">
                                <Link className='text-center btn btn-sm'>Add Volunteer Post</Link>
                                <Link className='text-center btn btn-sm'>Manage My Post</Link>
                                <button onClick={handleSignOut} className='text-center btn btn-sm'>Sign Out</button>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to={'/login'}><button className='btn'>Login</button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;