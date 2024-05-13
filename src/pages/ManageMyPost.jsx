import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const ManageMyPost = () => {
    const { user, setLoading, loadedUser} = useContext(AuthContext);

    const [myPost, setMyPost] = useState([]);
    const [myRequest, setMyRequest] = useState([]);

    const myPostURL = `http://localhost:5300/volunteers?email=${user?.email}`;
    const myRequestURL = `http://localhost:5300/bevolunteer?volunteerEmail=${user?.email}`;

    // My post 
    useEffect(() => {
        setLoading(true)
        axios.get(myPostURL)
            .then(res => {
                setMyPost(res.data);
                setLoading(false);
            })
    }, [myPostURL, setLoading])

    // My request
    useEffect(() => {
        setLoading(true)
        axios.get(myRequestURL)
            .then(res => {
                setMyRequest(res.data);
                setLoading(false);
            })
    }, [myRequestURL, setLoading])

    return (
        <div className="space-y-10">
            {/* My Post Section */}
            <div>
                <div>
                    <h1 className="text-center p-5 text-3xl font-bold">My need volunteer post</h1>
                </div>
                <div className="container mx-auto">
                    {
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
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myPost.map(post => <>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                                    <Link to={`/updatepage/${post._id}`}><button className="btn btn-sm font-medium text-blue-600 dark:text-blue-500 ">Update</button></Link>
                                                    <button className="btn btn-sm font-medium text-red-600 dark:text-red-500 ">Delete</button>
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

            {/* My request section */}
            <div>
                <div>
                    <h1 className="text-center p-5 text-3xl font-bold">My Volunteer Request</h1>
                </div>
                <div className="container mx-auto">
                    {
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
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myRequest.map(post => <>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                                <td className="px-6 py-4 text-right">
                                                    <button className="btn btn-sm font-medium text-blue-600 dark:text-blue-500 ">Cancel Request</button>
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