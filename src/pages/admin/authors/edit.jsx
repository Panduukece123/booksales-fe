import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_services/authors";

const AuthorEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    bio: "",
    _method: "PUT",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fix: Hanya panggil showAuthor, tidak perlu getAuthors
        const authorData = await showAuthor(id);

        setFormData({
          name: authorData.name || "",
          bio: authorData.bio || "",
          photo: null, // Set ke null untuk file baru
          _method: "PUT",
        });
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({
        ...formData,
        photo: files[0], // Fix: konsisten gunakan 'photo'
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      
      // Fix: Logic FormData yang benar
      for (const key in formData) {
        if (key === "photo") {
          // Hanya append jika ada file baru
          if (formData.photo instanceof File) {
            payload.append("photo", formData.photo);
          }
        } else {
          payload.append(key, formData[key]);
        }
      }

      await updateAuthor(id, payload);
      navigate("/admin/authors");
    } catch (error) {
      console.error("Error updating author:", error);
      alert("Error updating author: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Edit Author
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name" // Fix: for -> htmlFor
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Author name"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="photo" // Fix: for -> htmlFor dan konsisten dengan name
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo
                </label>
                <input
                  type="file"
                  name="photo" // Fix: konsisten gunakan 'photo'
                  id="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="bio" // Fix: for -> htmlFor
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Write a bio of author here..."
                ></textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save Data
              </button>
              <button
                type="reset"
                className="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AuthorEdit;