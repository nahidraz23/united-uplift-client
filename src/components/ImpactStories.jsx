const ImpactStories = () => {
    return (
        <div className="">

            <div className="my-10">
                <h1 className="text-center text-3xl font-bold">Impact Stories</h1>
            </div>
            <div className="flex flex-col lg:flex-row container mx-auto gap-10 p-5 items-center justify-center">
                <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                    <img src="https://images.unsplash.com/photo-1617817546276-80b86dd60151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZvbHVudGVlcnxlbnwwfDB8MHx8fDA%3D" alt="" className="rounded-2xl" />
                </div>
                <div className="text-center lg:text-left md:w-1/3 space-y-6 ">
                    <div className="card w-96 bg-[#F7DCB9] shadow-xl md:translate-x-20">
                        <div className="card-body">
                            <h2 className="card-title">Cause That Aligns Passion</h2>
                            <p>We connect volunteers with causes that ignite their passion and drive for positive change.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#B5C18E] shadow-xl ">
                        <div className="card-body">
                            <h2 className="card-title">Build A Brighter Future For All</h2>
                            <p>Empowering communities to co-create a brighter future for all.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#F7DCB9] shadow-xl md:translate-x-20">
                        <div className="card-body">
                            <h2 className="card-title">Contribution Help Others</h2>
                            <p>Your contribution today helps brighten countless lives tomorrow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactStories;