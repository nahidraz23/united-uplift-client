import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet-async";

const ManageMyPost = () => {
    const { user} = useContext(AuthContext);

    const [myPost, setMyPost] = useState([]);
    const [myRequest, setMyRequest] = useState([]);

    const myPostURL = `https://united-uplift-server.vercel.app/volunteers?email=${user?.email}`;
    const myRequestURL = `https://united-uplift-server.vercel.app/bevolunteer?volunteerEmail=${user?.email}`;

    // My post 
    useEffect(() => {
        axios.get(myPostURL)
            .then(res => {
                setMyPost(res.data);
            })
    }, [myPostURL])

    // My request
    useEffect(() => {
        axios.get(myRequestURL)
            .then(res => {
                setMyRequest(res.data);
            })
    }, [myRequestURL])

    // Delete my volunteer post
    const handlePostDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://united-uplift-server.vercel.app/volunteers/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remaining = myPost.filter(item => item._id !== id);
                            setMyPost(remaining);
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your request has been deleted successfull.",
                    icon: "success"
                });
            }
        });
    }

    // Cancel request handle
    const handleCancelRequest = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://united-uplift-server.vercel.app/bevolunteer/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const remaining = myRequest.filter(item => item._id !== id);
                            setMyRequest(remaining);
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your request has been deleted successfull.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="space-y-10">
            <div>
                <Helmet>
                    <title>United Uplift | Manage</title>
                </Helmet>
            </div>
            {/* My Post Section */}
            <div>
                <div>
                    <h1 className="text-center p-5 text-3xl font-bold">My need volunteer post</h1>
                </div>
                <div className="container mx-auto">

                    {
                        (myPost.length === 0) ?
                            <>
                                <Player
                                    src="https://lottie.host/ce9ef0b8-65b1-4294-9e6c-16681ffb5260/iQ0Pm4lNZl.json"
                                    className="palyer w-72"
                                    loop
                                    autoplay
                                />
                                <div>
                                    <h1 className="text-center">You did not add any post yet</h1>
                                </div>
                            </>
                            :
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Post Title
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Organizer Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Deadline
                                            </th>

                                            <th scope="col" className="px-6 py-3">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="hover:text-white">
                                        {
                                            myPost.map(post =>
                                                <>
                                                    <tr className="bg-white text-black border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-white">
                                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                                            {post.title}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {post.category}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {post.email}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {post.deadline}
                                                        </td>
                                                        <td className="px-6 py-4 text-right space-x-2">
                                                            <Link to={`/updatepage/${post._id}`}><button className="btn btn-sm rounded-full font-medium text-blue-600 dark:text-blue-500 ">Update</button></Link>
                                                            <button onClick={() => handlePostDelete(post._id)} className="btn btn-sm rounded-full font-medium text-red-600 dark:text-red-500 ">Delete</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>

            {/* My request section */}
            <div className="my-10">
                <div>
                    <h1 className="text-center p-5 text-3xl font-bold">My Volunteer Request</h1>
                </div>
                <div className="container mx-auto">
                    {
                        (myRequest.length === 0) ?
                            <>
                                <Player
                                    src="https://lottie.host/ce9ef0b8-65b1-4294-9e6c-16681ffb5260/iQ0Pm4lNZl.json"
                                    className="palyer w-72"
                                    loop
                                    autoplay
                                />
                                <div>
                                    <h1 className="text-center">You do not respond to any volunteer request yet.</h1>
                                </div>
                            </>
                            :
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Post Title
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Organizer Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Deadline
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" className="px-16 py-3 text-end">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myRequest.map(post => <>
                                                <tr className=" bg-white text-black border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-white">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                        {post.title}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {post.category}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {post.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {post.deadline}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {post.status}
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button onClick={() => handleCancelRequest(post._id)} className="btn btn-sm rounded-full font-medium text-blue-600 dark:text-blue-500 ">Cancel Request</button>
                                                    </td>
                                                </tr>
                                            </>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageMyPost;