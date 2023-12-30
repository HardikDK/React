import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import Select from "react-select";
import { z } from "zod";
import {
   useReactTable,
   getCoreRowModel,
   flexRender
} from '@tanstack/react-table';

const ListTable = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleChangeUserData = (e) => {
    const { name, value } = e.target;
    setEditData((userData) => ({
      ...userData,
      [name]: value
    }));
    console.log(editData)
  };
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption)
    setEditData((userData) => ({
      ...userData,
      country: selectedOption
    }));
  };
  const getUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3005/Users");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getEditUserData = (id) => {
    axios.get(`http://127.0.0.1:3005/Users/${id}`).then((response) => {
      setEditData(response.data);
      setSelectedOption(response.data.country.value);
    });
  };
  const schema = z.object({
    name: z.string({
      required_error: "Please enter your Name",
    }).trim(),
    comment: z.string({
      required_error: "Please write a Comment",
    }).trim(),
    country: z.object({
      value: z.string().trim(),
      label: z.string().trim(),
    })
  });
  const updateUser = async (userId) => {
    try {
        console.log(schema)
    //   schema.parse(editData);
      const response = await fetch(`http://127.0.0.1:3005/Users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      })
      const updatedUserData = await response.json()
      if (updatedUserData) {
        alert("User Updated Successfully")
        getUsers();
      }
    } catch (error) {
      console.log(error)
      setErrors(JSON.parse(error))
    }
  }
  const deleteUser = async (id) => {
    try {
      const isDelete = window.confirm("are you sure?");
      alert(isDelete);
      if (isDelete === true) {
        const response = await axios.delete(
          `http://127.0.0.1:3005/Users/${id}`
        );
        if (response) {
          getUsers();
          alert("User Deleted Successfully!");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const options = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "ME", label: "Mexico" },
    { value: "IN", label: "India" },
  ];
  const columns = [
    {
      accessorKey: 'id',
      header: () => <span>No</span>
    },
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'comment',
      header: () => <span>Comment</span>
    },
    {
      accessorKey: 'country.label',
      header: 'Country'
    },
  ]
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="block justify-center items-center">
      <table className="w-full table-auto border-separate border">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} id={row.id} className="even:bg-blue-500">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 hidden">
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
                value={editData.name}
                onChange={handleChangeUserData}
              />
              <input type="hidden" name="id" id="id" value={editData.id} />
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
              value={editData.comment}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChangeUserData}
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
              value={options.find(option => option.value === selectedOption)}
              onChange={handleChange}
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
            onClick={editData.id ? () => updateUser(editData.id) : null}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {editData.id ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListTable;
