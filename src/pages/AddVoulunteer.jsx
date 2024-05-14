import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

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
        const noOfVolunteer = form.volunteercount.value;
        const deadline =  form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;

        const volunteer = {thumbnail, title, category, location, noOfVolunteer, deadline, email, name, description};

        axios.post('http://localhost:5300/volunteers', volunteer)
        .then(res => {
            if(res.data.insertedId){
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
            <div className='mt-20'>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center mb-20">Add Volunteer Post</h2>
                    </div>
                    <form onSubmit={handleAddVolunteer}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Thumbnail</label>
                                <input name="thumbnail" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Post Title</label>
                                <input name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Category</label>
                                <select name="category" id="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
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
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Location</label>
                                <input name="location" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">No of volunteer needed:</label>
                                <input name="volunteercount" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Deadline</label>
                                <div className="w-full">
                                    <DatePicker
                                        name="deadline"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        isClearable
                                        placeholderText="Please pick a date"
                                        wrapperClassName="w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Organizer Email</label>
                                <input readOnly name="email" defaultValue={user?.email || loadedUser?.email} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Organizer Name</label>
                                <input readOnly name="name" defaultValue={user?.displayName || loadedUser?.displayName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Description</label>
                            <textarea name="description" cols="30" rows="10" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none" placeholder="Type brief description here"></textarea>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Volunteer</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddVoulunteer;