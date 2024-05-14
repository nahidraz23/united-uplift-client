import { useLoaderData } from "react-router-dom";
import VolenteerCard from "../components/VolenteerCard";
import { Helmet } from "react-helmet-async";


const NeedVolunteer = () => {

    const loadedVolunteer = useLoaderData();

    return (
        <div>
            <div>
                <Helmet>
                    <title>United Uplift | Need Voulteer</title>
                </Helmet>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 my-10">
                {
                    loadedVolunteer.map((volunteer, index) => <VolenteerCard key={index} volunteer={volunteer}></VolenteerCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;