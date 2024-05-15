import { Link } from "react-router-dom";
import NeedVolunteer from "../../components/NeedVolunteerNow";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/AboutUs";
import ImpactStories from "../../components/ImpactStories";

const Home = () => {
    return (
        <div className="">
            <div>
                <Helmet>
                    <title>United Uplift | Home</title>
                </Helmet>
            </div>

            <div>
                <Banner></Banner>
            </div>

            <div className="mt-10 container mx-auto">
                <NeedVolunteer></NeedVolunteer>
            </div>

            {/* See more section */}
            <div className="flex justify-center my-10">
                <Link to={'/needVolunteer'}><button className="btn ">See More</button></Link>
            </div>

            <div className="my-10">
                <AboutUs></AboutUs>
            </div>

            <div className="my-10">
                <ImpactStories></ImpactStories>
            </div>
        </div>
    );
};

export default Home;