import { Link } from "react-router-dom";

const VolenteerCard = ({ volunteer }) => {

    const {_id, thumbnail, title, deadline, category} = volunteer;
    return (
        <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={thumbnail} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{category}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-moderno font-semibold">Deadline:</span> {deadline}</p>
                <Link to={`/volunteerDetails/${_id}`}><button className="btn w-full">View Details</button></Link>
            </div>
        </div>
    );
};

export default VolenteerCard;