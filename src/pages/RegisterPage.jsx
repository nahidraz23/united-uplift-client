import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Player } from '@lottiefiles/react-lottie-player';
import axios from 'axios';

const RegisterPage = () => {
    const { user, createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;

        if (password.length < 6) {
            toast.error("Password length should be more than 6 charecters long.");
            return;
        }
        if (!/^(?=.*[a-z]).{6,}$/.test(password)) {
            return toast.error("Your password should have at least 1 lowercase letter")
        }
        if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error("Your password should have at least 1 uppercase letter");
            return;
        }

        createUser(
            email,
            password,
            displayName,
            photoURL
        )
            .then((res) => {
                const lastLogiIn = res.user.metadata.lastSignInTime;
                const user = { email, displayName, photoURL, password, lastLogiIn };
                axios.post('http://localhost:5300/users', user)
                    .then(res => {
                        console.log(res.data);
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
     return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSignUp} className="w-full">
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className="flex-1">
                                <Player src="https://lottie.host/beff228d-74a9-472f-bec3-107367a09965/z9Kmy4ozxZ.json"
                                    className='player'
                                    loop
                                    autoplay
                                />
                            </div>
                            <div className='flex-1 card shadow-xl p-4'>
                                <div className="flex items-center justify-center mt-6">
                                    <a href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                        sign up
                                    </a>
                                </div>

                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input required name='name' type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                                </div>

                                <div className='mt-6 relative'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-3 left-3 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>

                                    <input required name='photoURL' type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="PhotoURL" />
                                </div>

                                <div className="relative flex items-center mt-6">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>

                                    <input required name='email' type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                </div>

                                <div className="relative flex items-center mt-4">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>

                                    <input required name='password' type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                                </div>

                                <div className="mt-6">
                                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign Up
                                    </button>

                                    <div className="mt-6 text-center ">
                                        <Link to={'/login'} className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                            Already have an account? Sign In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Toaster
                position="bottom-right"
                toastOptions={
                    {
                        duration: 2000,
                    }
                }
            />
        </div>
    );
};

export default RegisterPage;