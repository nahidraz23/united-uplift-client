import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const BeVolunter = () => {
    const { user, loadedUser } = useContext(AuthContext);

    const loadedVolunteer = useLoaderData();

    const {
        _id,
        thumbnail,
        title,
        category,
        location,
        noOfVolunteer,
        deadline,
        email,
        description,
    } = loadedVolunteer;

    const handleBeVolunteer = (e) => {
        e.preventDefault();

        const form = e.target;

        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const category = form.category.value;
        const location = form.location.value;
        const noOfVolunteer = parseInt(form.volunteercount.value);
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;
        const suggestion = form.suggestion.value;
        const status = form.status.value;
        const volunteerEmail = form.volunteerEmail.value;
        const volunteerName = form.volunteerName.value;

        const volunteer = {
            thumbnail,
            title,
            category,
            location,
            noOfVolunteer,
            deadline,
            email,
            name,
            description,
            suggestion,
            status,
            volunteerEmail,
            volunteerName,
        };

        if (email === volunteerEmail) {
            Swal.fire({
                title: "Error",
                text: "You are the author of this post",
                icon: "error",
                confirmButtonText: "ok",
            });
            return
        }

        axios
            .post("https://united-uplift-server.vercel.app/bevolunteer", volunteer)
            .then((res) => {
                if (email !== volunteerEmail) {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Success",
                            text: "Request send successfully",
                            icon: "success",
                            confirmButtonText: "ok",
                        });
                    }
                }
            });

        axios.put(`https://united-uplift-server.vercel.app/bevolunteer/${_id}`, {noOfVolunteer: noOfVolunteer})
            .then((res) => {
                console.log(res.data)
            })

        console.log(volunteer)
    }

    // const handleUpdateVolunteerCount = id => {
    //     axios.put(`https://united-uplift-server.vercel.app/bevolunteer/${id}`)
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    // }

    return (
        <div className="my-10">
            <div>
                <Helmet>
                    <title>United Uplift | Be Volunteer</title>
                </Helmet>
            </div>
            <div className="mt-20">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                    <div>
                        <h2 className="text-lg font-semibold text-black capitalize text-center mb-20">
                            Be A Volunteer
                        </h2>
                    </div>
                    <form onSubmit={handleBeVolunteer}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="username"
                                >
                                    Thumbnail
                                </label>
                                <input
                                    defaultValue={thumbnail}
                                    readOnly
                                    name="thumbnail"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="username"
                                >
                                    Post Title
                                </label>
                                <input
                                    defaultValue={title}
                                    readOnly
                                    name="title"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="emailAddress"
                                >
                                    Category
                                </label>
                                <input
                                    defaultValue={category}
                                    readOnly
                                    name="category"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="password"
                                >
                                    Location
                                </label>
                                <input
                                    defaultValue={location}
                                    readOnly
                                    name="location"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="passwordConfirmation"
                                >
                                    No of volunteer needed:
                                </label>
                                <input
                                    defaultValue={noOfVolunteer}
                                    readOnly
                                    name="volunteercount"
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    className="text-black "
                                    htmlFor="passwordConfirmation"
                                >
                                    Deadline
                                </label>
                                <input
                                    defaultValue={deadline}
                                    readOnly
                                    name="deadline"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="password"
                                >
                                    Organizer Email
                                </label>
                                <input
                                    readOnly
                                    name="email"
                                    defaultValue={email}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="password"
                                >
                                    Organizer Name
                                </label>
                                <input
                                    readOnly
                                    name="name"
                                    defaultValue={user?.displayName || loadedUser[0]?.displayName}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="password"
                                >
                                    Volunteer Email
                                </label>
                                <input
                                    readOnly
                                    name="volunteerEmail"
                                    defaultValue={user?.email || loadedUser[0]?.email}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="password"
                                >
                                    Volunteer Name
                                </label>
                                <input
                                    readOnly
                                    name="volunteerName"
                                    defaultValue={user?.displayName || loadedUser[0]?.displayName}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="">
                                <label className="text-black ">
                                    Description
                                </label>
                                <textarea
                                    defaultValue={description}
                                    readOnly
                                    name="description"
                                    cols="30"
                                    rows="1"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                                    placeholder="Type brief description here"
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    className="text-black "
                                    htmlFor="password"
                                >
                                    Status
                                </label>
                                <input
                                    name="status"
                                    defaultValue={"Requested"}
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label
                                className="text-black "
                                htmlFor="password"
                            >
                                Suggestion
                            </label>
                            <input
                                name="suggestion"
                                cols="30"
                                rows="2"
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none"
                                placeholder="Type brief description here"
                            ></input>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="btn px-8 py-2.5 leading-5 transition-colors duration-300 transhtmlForm rounded-full bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">Request</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default BeVolunter;
