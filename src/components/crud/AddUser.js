// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { z } from "zod";

const AddUser = () => {
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState([]);


  const options = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "ME", label: "Mexico" },
    { value: "IN", label: "India" },
  ];

  const schema = z.object({
    name: z.string({
      required_error: "Please enter your Name",
    }),
    comment: z.string({
      required_error: "Please write a Comment",
    }),
    country: z.object({
      value: z.string(),
      label: z.string(),
    })
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((userData) => ({
      ...userData,
      [name]: value
    }));
  };
  const handleCountryChange = (e) => {
    // setSelectedOption(editData.country.label);
	  setSelectedOption(e.value);
    console.log(e)
    setUserData((userData) => ({
      ...userData,
      country: e
    }));
  }
  const createUser = async () => {
    try {
        schema.parse(userData);
        const response = await fetch("http://127.0.0.1:3005/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response) {
        alert("User Added Successfully")
        window.location = "/users/list";
      }
    } catch (error) {
      console.error(error)
      setErrors(JSON.parse(error))
    }
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Profile
        </h2>
        <div className="sm:col-span-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
                onChange={handleChange}
              />
            </div>
            {errors.map((error, key) => <span key={key} className="text-danger">{error.path == "name" ? error.message : ''}</span>)}
          </div>
        </div>

        <div className="col-span-full mt-3">
          <label
            htmlFor="comment"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            About
          </label>
          <div className="mt-2">
            <textarea
              id="comment"
              name="comment"
              rows={3}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {errors.map((error, key) => <span key={key} className="text-danger">{error.path == "comment" ? error.message : ''}</span>)}
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write a few sentences about yourself.
          </p>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="mt-2">
            <Select 
              options={options} 
              onChange={handleCountryChange}
            />
          </div>
          {errors.map((error, key) => <span key={key} className="text-danger">{error.path == "country" ? error.message : ''}</span>)}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={createUser}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
