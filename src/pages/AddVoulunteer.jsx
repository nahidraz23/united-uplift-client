import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddVoulunteer = () => {
    const { user, loadedUser } = useContext(AuthContext)

    const [startDate, setStartDate] = useState(new Date());

    const handleAddVolunteer = e => {
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

        const volunteer = { thumbnail, title, category, location, noOfVolunteer, deadline, email, name, description };
        console.log(volunteer)

        axios.post('https://united-uplift-server.vercel.app/volunteers', volunteer)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Post added successfully",
                        icon: "success",
                        confirmButtonText: "ok",
                    });
                }
            })

    }

    console.log

    return (
        <div className="my-10">
            <div>
                <Helmet>
                    <title>United Uplift | Add Post</title>
                </Helmet>
            </div>
            <div className='mt-20'>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                    <div>
                        <h2 className="text-lg font-semibold text-black capitalize text-center mb-20">Add Volunteer Post</h2>
                    </div>
                    <form onSubmit={handleAddVolunteer}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-black " htmlFor="username">Thumbnail</label>
                                <input name="thumbnail" type="text" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-black " htmlFor="username">Post Title</label>
                                <input name="title" type="text" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-black " htmlFor="emailAddress">Category</label>
                                <select name="category" id="" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                    <option value="Social Service">Social Service</option>
                                    <option value="Animal Welfare">Animal Welfare</option>
                                    <option value="Disaster Relief">Disaster Relief</option>
                                    <option value="Child Welfare">Child Welfare</option>
                                    <option value="Elderly Care">Elderly Care</option>
                                    <option value="International Aid">International Aid</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-black " htmlFor="password">Location</label>
                                <input name="location" type="text" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-black " htmlFor="passwordConfirmation">No of volunteer needed:</label>
                                <input name="volunteercount" type="number" className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div className="w-full">
                                <label className="text-black " htmlFor="passwordConfirmation">Deadline</label>
                                <div className="w-full">
                                    <DatePicker
                                        name="deadline"
                                        className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        isClearable
                                        placeholderText="Please pick a date"
                                        wrapperClassName="w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-black " htmlFor="password">Organizer Email</label>
                                <input readOnly name="email" defaultValue={user?.email || loadedUser?.email} type="text" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-black " htmlFor="password">Organizer Name</label>
                                <input readOnly name="name" defaultValue={user?.displayName || loadedUser?.displayName} type="text" className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md  text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-black " htmlFor="password">Description</label>
                            <textarea name="description" cols="30" rows="10" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none" placeholder="Type brief description here"></textarea>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="btn px-8 py-2.5 leading-5 transition-colors duration-300 transhtmlForm rounded-full bg-[#3C5B6F] text-white hover:text-[#3C5B6F]">Add Volunteer</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddVoulunteer;