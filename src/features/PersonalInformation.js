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

  const [errors, setErrors] = useState({});
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

  const validate = () => {
    let newErrors = {};

    if (!formData.profilePhoto) newErrors.profilePhoto = "Profile photo is required";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (formData.objective.split(' ').length < 250) {
      newErrors.objective = "Objective must be at least 250 words";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getFormData = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(setPersonalInformation(formData));
      navigate("/workExperience");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-slate-500 rounded-sm mx-4 sm:mx-8 lg:mx-24 xl:mx-48 2xl:mx-64 p-4 sm:p-8">
      <form onSubmit={getFormData}>
        <div className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl scale-125 mt-4 text-fuchsia-900">
          <FontAwesomeIcon icon={faAddressCard} className="mr-2" /> Personal Information
        </div>
        {/* Profile Photo */}
        <div className="flex flex-col items-center mt-4">
          <Avatar
            sx={{ width: 150, height: 150 }}
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
          {errors.profilePhoto && <span className="text-red-500">{errors.profilePhoto}</span>}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Form Fields */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
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
            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>

          {/* Mobile */}
          <div className="flex-1">
            <label htmlFor="mnumber" className="text-lg block mb-2 text-blue-300">
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
            {errors.mobile && <span className="text-red-500">{errors.mobile}</span>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Address */}
          <div className="flex-1">
            <label htmlFor="address" className="text-lg block mb-2 text-blue-300">
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
            {errors.address && <span className="text-red-500">{errors.address}</span>}
          </div>

          {/* Pincode */}
          <div className="flex-1">
            <label htmlFor="pin-number" className="text-lg block mb-2 text-blue-300">
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
            {errors.pincode && <span className="text-red-500">{errors.pincode}</span>}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Position */}
          <div className="flex-1">
            <label htmlFor="position" className="text-lg block mb-2 text-blue-300">
              Position Applying For
            </label>
            <input
              id="position"
              name="position"
              type="text"
              placeholder="Enter Position"
              value={formData.position}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded-md"
            />
            {errors.position && <span className="text-red-500">{errors.position}</span>}
          </div>
        </div>

        {/* Objective */}
        <div className="mt-4">
          <label htmlFor="objective" className="text-lg block mb-2 text-blue-300">
            Objective
          </label>
          <textarea
            id="objective"
            name="objective"
            placeholder="Enter Your Objective"
            value={formData.objective}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md"
            rows="4"
          />
          {errors.objective && <span className="text-red-500">{errors.objective}</span>}
        </div>

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
