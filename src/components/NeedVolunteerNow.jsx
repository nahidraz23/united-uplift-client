import axios from "axios";
import { useEffect, useState } from "react";
import VolenteerCard from "./VolenteerCard";

const NeedVolunteerNow = () => {
    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        axios.get('https://united-uplift-server.vercel.app/volunteers')
            .then(res => {
                setVolunteers(res.data);
            })
    }, [])

    console.log(volunteers)

    return (
        <div className="container p-4">
            <div className="p-5">
                <h1 className="text-center font-fredoka text-2xl md:text-4xl font-semibold">Volunteer Needs Now</h1>
            </div>
            <div className="my-10 grid md:grid-cols-2 justify-items-center gap-6">
                {
                    volunteers.slice(0,6).map((volunteer, index) => <VolenteerCard key={index} volunteer={volunteer}></VolenteerCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteerNow;