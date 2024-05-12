import { Link, useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {

    const loadedVolunteer = useLoaderData();

    const { _id, thumbnail, title, category, location, noOfVolunteer, deadline, email, name, description } = loadedVolunteer;
    return (
        <div className="flex flex-col items-center">
            <div className="my-10">
                <h2 className="text-4xl">{title}</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="">
                    <img src={thumbnail} alt="" className="card card-compact md:h-[646px]" />
                </div>
                <div className="card bg-base-100 shadow-xl image-full mt-5 md:mx-40 md:w-1/3">
                    <figure className="w-full"><img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDI%3D" alt="Shoes" className="w-full " /></figure>
                    <div className="card-body">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div>
                                <div>
                                    <p className="text-center my-8 text-4xl font-fredoka font-medium">Description</p>
                                </div>
                                <div>
                                    <p className="text-center mb-6 text-2xl font-fredoka">{description}</p>
                                </div>
                            </div>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Category
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className="text-center">{category}</p>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            No of Volunteer
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className="text-center">{noOfVolunteer}</p>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Organizer Email
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className="text-center">{email}</p>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Organizer Name
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className="text-center">{name}</p>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Location
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className="text-center">{location}</p>
                                        </td>
                                    </tr>
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Deadline
                                        </th>
                                        <td className="px-6 py-4">
                                            <p className="text-center">{deadline}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mx-auto">
                            <Link to={`/bevolunteer/${_id}`}><button className="btn btn-outline text-white">Be A Volunteer</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;