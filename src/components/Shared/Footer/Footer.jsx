import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="bg-[#001524] dark:bg-gray-900 text-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="md:flex md:-mx-3 md:items-center md:justify-between">
                    <h1 className="text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                    <Link to={'/registration'}>
                        <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto text-black hover:text-white">
                            <a className="inline-flex items-center justify-center w-full px-4 py-2 text-sm duration-300 bg-white rounded-full gap-x-3 hover:bg-gray-700 focus:ring focus:ring-white focus:ring-opacity-80">
                                <button >Sign Up Now</button>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </Link>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <p className="font-semibold text-white dark:text-white">Quick Link</p>

                        <div className="flex flex-col items-start mt-5 space-y-2 text-white">
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Homepage</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Us</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Serve</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white dark:text-white">Urgent Charity</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Save Worlds</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Old People</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Donation</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white dark:text-white">Services</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Non Profit School</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">War Donation</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">Kids Donation</a>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white dark:text-white">Contact Us</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">+880 768 473 4978</a>
                            <a href="#" className="text-white transition-colors duration-300 dark:text-white dark:hover:text-blue-400 hover:underline hover:text-blue-500">info@uniteduplift.com</a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <div className='flex items-center gap-2'>
                        <div>
                            <img className="w-auto h-7" src={logo} alt="" />
                        </div>
                        <div>
                            <h1>United Uplift</h1>
                        </div>
                    </div>

                    <p className="mt-4 text-sm sm:mt-0 text-[#445D48] ">© Copyright 2024. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;