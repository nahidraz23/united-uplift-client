import { Link } from "react-router-dom";
import NeedVolunteer from "../../components/NeedVolunteerNow";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <div>
                <NeedVolunteer></NeedVolunteer>
            </div>
            {/* See more section */}
            <div className="flex justify-center my-10">
                <Link to={'/needVolunteer'}><button className="btn ">See More</button></Link>
            </div>
        </div>
    );
};

export default Home;