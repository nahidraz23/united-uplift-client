import 'flowbite';
import logo from '../../../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
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

    // console.log(loadedUser)

    return (
        <div className="navbar bg-red-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
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
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle">
                                {
                                   ( user?.photoURL || loadedUser[0]?.photoURL) ?
                                    <img src={user?.photoURL || loadedUser[0]?.photoURL} className='rounded-full'/>
                                    :
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full'/>
                                }
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52 space-y-1">
                                <Link to={'/addvolunteer'} className='text-center btn btn-sm'>Add Volunteer Post</Link>
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