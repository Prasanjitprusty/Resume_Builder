import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPersonalInformation } from "../features/userDetails/userDetailsSlice";
import { Avatar } from "@mui/material";

export default function PersonalInformation() {
  const [formData, setFormData] = useState({
    profilePhoto: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    position: "",
    objective: "",
  });

  const inputRef = useRef(null);

  const handleProfilePhotoClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevState) => ({
          ...prevState,
          profilePhoto: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getFormData = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    dispatch(setPersonalInformation(formData)); // This dispatches the entire formData object
    navigate("/workExprience");
  };

  const handleBack = () => {
    navigate(-1);
  };

  

  return (
    <div className="bg-slate-500 rounded-sm m-24 p-8">
      <form onSubmit={getFormData}>
        <div className="text-center scale-125 mt-4 text-fuchsia-900">
          <FontAwesomeIcon icon={faAddressCard} className="mr-2" /> Personal
          Information
        </div>
        {/* Profile Photo */}
        <div className="flex flex-col items-center mt-4">
          <Avatar
            sx={{ width: 80, height: 80 }}
            className="cursor-pointer"
            src={formData.profilePhoto}
            onClick={handleProfilePhotoClick}
          />
          <button
            type="button"
            onClick={handleProfilePhotoClick}
            className="mt-2 text-blue-500 underline"
          >
            Change Profile Photo
          </button>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <div className="flex gap-4 mt-4 flex-row">
          {/* First Name */}
          <div className="flex-1">
            <label htmlFor="fname" className="text-lg block mb-2 text-blue-300">
              First Name
            </label>
            <input
              id="fname"
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>

          {/* Last Name */}
          <div className="flex-1">
            <label htmlFor="lname" className="text-lg block mb-2 text-blue-300">
              Last Name
            </label>
            <input
              id="lname"
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4 flex-row">
          {/* Email */}
          <div className="flex-1">
            <label htmlFor="email" className="text-lg block mb-2 text-blue-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>

          {/* Mobile */}
          <div className="flex-1">
            <label
              htmlFor="mnumber"
              className="text-lg block mb-2 text-blue-300"
            >
              Mobile
            </label>
            <input
              id="mnumber"
              name="mobile"
              type="tel"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4 flex-row">
          {/* Address */}
          <div className="flex-1">
            <label
              htmlFor="address"
              className="text-lg block mb-2 text-blue-300"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>

          {/* Pincode */}
          <div className="flex-1">
            <label
              htmlFor="pin-number"
              className="text-lg block mb-2 text-blue-300"
            >
              Pincode
            </label>
            <input
              id="pin-number"
              name="pincode"
              type="number"
              placeholder="Enter Pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4 flex-row">
          {/*Appling Position For */}
          <div className="flex-1">
            <label
              htmlFor="position"
              className="text-lg block mb-2 text-blue-300"
            >
              Position Appling For
            </label>
            <input
              id="position"
              name="position"
              type="text"
              placeholder="Type the Position Applying For ......"
              value={formData.position}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
          </div>

        </div>
        <label htmlFor="objective" className="block mt-4 text-lg text-blue-300">
          Objective
        </label>{" "}
        <br />
        <textarea
          className="border rounded px-4 py-4 w-full"
          id="objective"
          name="objective"
          rows="4"
          placeholder="Write Here..."
          value={formData.objective}
          onChange={handleInputChange}
        />
        <div className="flex justify-end gap-3 mt-10">
          <button
            type="button"
            onClick={handleBack}
            className="bg-red-400 px-8 py-3 rounded-lg leading-tight tracking-widest"
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-yellow-400 px-8 py-3 rounded-lg leading-tight tracking-widest"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
