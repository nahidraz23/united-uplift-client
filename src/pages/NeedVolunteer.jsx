import { Link, useLoaderData } from "react-router-dom";
import VolenteerCard from "../components/VolenteerCard";
import { Helmet } from "react-helmet-async";
import { useState } from "react";


const NeedVolunteer = () => {

    const loadedVolunteer = useLoaderData();
    const [listView, setListView] = useState(false);

    return (
        <div className="p-4 md:p-0">
            <div>
                <Helmet>
                    <title>United Uplift | Need Voulteer</title>
                </Helmet>
            </div>
            <div className="my-10 flex items-center w-full justify-evenly">
                <div className="flex gap-1">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full" />
                    <button className="btn rounded-full bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">Search</button>
                </div>
                <div>
                    <button onClick={() => setListView(!listView)} className="btn btn-circle bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div>
                {
                    listView ?
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Deadline</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    {
                                        loadedVolunteer.map((volunteer) =>
                                            <>
                                                <tr className="">
                                                    <td className="">
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-16 h-16">
                                                                    <img src={volunteer.thumbnail} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{volunteer.title}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h1 className="">{volunteer.category}</h1>
                                                    </td>
                                                    <td className="">{volunteer.deadline}</td>
                                                    <th>
                                                        <Link to={`/volunteerDetails/${volunteer._id}`}>
                                                            <button className="btn rounded-full btn-sm bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">View Details</button>
                                                        </Link>
                                                    </th>
                                                </tr>
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className='grid grid-cols-1 my-10 p-4  md:grid-cols-3 justify-items-center gap-6'>
                            {
                                loadedVolunteer.map((volunteer, index) => <VolenteerCard key={index} volunteer={volunteer} listView={listView}></VolenteerCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;