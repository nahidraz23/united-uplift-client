import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const loadedData = useLoaderData();
    const { user, loadedUser } = useContext(AuthContext);
    const { _id, thumbnail, title, category, location, noOfVolunteer, deadline, email, name, description } = loadedData;
    const [startDate, setStartDate] = useState(new Date(deadline));   

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const category = form.category.value;
        const location = form.location.value;
        const noOfVolunteer = form.volunteercount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;
        const description = form.description.value;

        const updatedVolunteer = { thumbnail, title, category, location, noOfVolunteer, deadline, email, name, description };

        axios.put(`http://localhost:5300/volunteers/${_id}`, updatedVolunteer)
        .then((res) => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Success",
                    text: "Post updated successfully",
                    icon: "success",
                    confirmButtonText: "ok",
                });
            }
        })
    }

    return (
        <div className="my-10">
            <div className='mt-20'>
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white text-center mb-20">Update</h2>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Thumbnail</label>
                                <input defaultValue={thumbnail} name="thumbnail" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Post Title</label>
                                <input defaultValue={title} name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Category</label>
                                <input defaultValue={category} name="category" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Location</label>
                                <input defaultValue={location} name="location" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">No of volunteer needed:</label>
                                <input defaultValue={noOfVolunteer} name="volunteercount" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
                                        wrapperClassName="w-full"
                                        placeholderText={deadline}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Organizer Email</label>
                                <input readOnly name="email" defaultValue={email} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Organizer Name</label>
                                <input readOnly name="name" defaultValue={name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div className="">
                                <label className="text-gray-700 dark:text-gray-200">Description</label>
                                <textarea defaultValue={description} name="description" cols="30" rows="1" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring resize-none" placeholder="Type brief description here"></textarea>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Status</label>
                                <input name="status" defaultValue={"Requested"} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdatePage;