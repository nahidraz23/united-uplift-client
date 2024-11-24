import { Link } from "react-router-dom";

const VolenteerCard = ({ volunteer, listView }) => {

    const { _id, thumbnail, title, deadline, category } = volunteer;
    return (
        <div>
            {
                listView ?
                    <>

                    </>
                    :
                    // <div className="card card-side bg-base-100 shadow-lg max-w-2xl shadow-[#3C5B6F] h-80">
                    //     <figure><img src={thumbnail} alt="Movie" className="w-56" /></figure>
                    //     <div className="flex flex-col gap-10 p-5 justify-center">
                    //         <h2 className="card-title">{title}</h2>
                    //         <p>Category: <span className="badge bg-[#B5C18E] p-4 text-black">{category}</span></p>
                    //         <p>Deadline: <span className="badge bg-[#F7DCB9] p-4 text-black">{deadline}</span></p>
                    //         <div className="flex justify-end">
                    //             <Link to={`/volunteerDetails/${_id}`}><button className="btn rounded-full bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">View Details</button></Link>
                    //         </div>
                    //     </div>
                    // </div>
                    <div className="card w-[500px] bg-white shadow-lg rounded-lg max-w-2xl hover:shadow-2xl transition-shadow duration-300">
                        {/* Card Header */}
                        <div className="relative">
                            <img
                                src={thumbnail}
                                alt="Volunteer Opportunity"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-3 right-3 bg-[#3C5B6F] text-white text-xs px-3 py-1 rounded-full shadow">
                                Volunteer Needed
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-4">
                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

                            {/* Category */}
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-[#B5C18E] rounded-full text-gray-800 font-semibold">
                                    📂
                                </div>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Category:</span> {category}
                                </p>
                            </div>

                            {/* Deadline */}
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-10 h-10 bg-[#F7DCB9] rounded-full text-gray-800 font-semibold">
                                    🕒
                                </div>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Deadline:</span> {deadline}
                                </p>
                            </div>

                            {/* Action Button */}
                            <div className="text-right">
                                <Link to={`/volunteerDetails/${_id}`}>
                                    <button className="px-6 py-2 rounded-full bg-[#3C5B6F] text-white text-sm font-medium shadow hover:bg-[#2c4657] transition-colors duration-300">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>


            }
        </div>
    );
};

export default VolenteerCard;