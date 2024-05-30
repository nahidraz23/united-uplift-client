import { Link } from "react-router-dom";

const VolenteerCard = ({ volunteer, listView}) => {

    const { _id, thumbnail, title, deadline, category } = volunteer;
    return (
        <div>
            {
                listView ?
                    <>

                    </>
                    :
                    <div className="card card-side bg-base-100 shadow-lg max-w-2xl shadow-[#3C5B6F] h-80">
                        <figure><img src={thumbnail} alt="Movie" className="w-56" /></figure>
                        <div className="flex flex-col gap-10 p-5 justify-center">
                            <h2 className="card-title">{title}</h2>
                            <p>Category: <span className="badge bg-[#B5C18E] p-4 text-black">{category}</span></p>
                            <p>Deadline: <span className="badge bg-[#F7DCB9] p-4 text-black">{deadline}</span></p>
                            <div className="flex justify-end">
                                <Link to={`/volunteerDetails/${_id}`}><button className="btn rounded-full bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">View Details</button></Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default VolenteerCard;