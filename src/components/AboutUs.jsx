const AboutUs = () => {
    return (
        <div>
            <div className="p-10">
                <h1 className="text-center text-3xl font-bold">About Us</h1>
            </div>
            <div className="bg-base-200">
                <div className="flex flex-col lg:flex-row container mx-auto gap-10 p-5 items-center justify-center">
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <img src="https://plus.unsplash.com/premium_photo-1681152769017-285ccacc508f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZvbHVudGVlcnxlbnwwfDF8MHx8fDA%3D" alt="" className="rounded-2xl" />
                    </div>
                    <div className="text-center lg:text-left md:w-1/3 space-y-6">
                        <h1 className="text-5xl font-bold">Learn More About Our Mission, Values, And The Impact We've Made.</h1>
                        <p className="py-6">At United Uplift, we unite hearts, hands, and hope to uplift communities worldwide. Together, we harness the power of volunteerism to create lasting, transformative change.</p>
                        <button className="btn rounded-full bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;