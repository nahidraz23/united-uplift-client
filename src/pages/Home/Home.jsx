import NeedVolunteer from "../../components/NeedVolunteerNow";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <div>
                <NeedVolunteer></NeedVolunteer>
            </div>
        </div>
    );
};

export default Home;