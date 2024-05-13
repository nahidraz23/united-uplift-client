import { useLoaderData } from "react-router-dom";
import VolenteerCard from "../components/VolenteerCard";


const NeedVolunteer = () => {

    const loadedVolunteer = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 my-10">
            {
                loadedVolunteer.map((volunteer, index) => <VolenteerCard key={index} volunteer={volunteer}></VolenteerCard>)
            }
        </div>
    );
};

export default NeedVolunteer;