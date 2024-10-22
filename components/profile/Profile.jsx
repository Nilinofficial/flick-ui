"use client";

import React, { useEffect, useState } from "react";

import { useUpdateProfile } from "../../queries/useUpdateProfile";

const Profile = ({ user }) => {
  const { mutate: updateProfile, isSuccess, error } = useUpdateProfile();

  const [successMessage, setSuccessMessage] = useState("");

  const [userCredentials, setUserCredentials] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    gender: user.gender,
    about: user.about,
    profilePhotoUrl: user.profilePhotoUrl,
  });

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage(
        `Hey ${userCredentials.firstName}, profile updated successfully`
      );

      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isSuccess]);

  const handleInputChange = (field) => (e) => {
    setUserCredentials((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="card bg-base-300 w-96">
      <div className="card-body">
        <h2 className="card-title flex justify-center">Profile</h2>

        <div className="py-4">
          <InputField
            label="First Name"
            value={userCredentials.firstName}
            onChange={handleInputChange("firstName")}
          />
          <InputField
            label="Last Name"
            value={userCredentials.lastName}
            onChange={handleInputChange("lastName")}
          />
          <InputField
            label="Age"
            value={userCredentials.age}
            onChange={handleInputChange("age")}
            type="number"
            placeholder="Enter your age"
          />
          <InputField
            label="Profile Photo URL"
            value={userCredentials.profilePhotoUrl}
            onChange={handleInputChange("profilePhotoUrl")}
          />

          <InputField
            label="Gender"
            value={userCredentials.gender}
            onChange={handleInputChange("gender")}
          />

          <InputField
            label="About"
            value={userCredentials.about}
            onChange={handleInputChange("about")}
          />
          {error && (
            <p className="text-red-500 ">{error?.response?.data?.message}</p>
          )}
        </div>

        <div className="card-actions justify-center">
          <button
            className="btn w-48"
            onClick={() => updateProfile(userCredentials)}
          >
            Update Profile
          </button>
        </div>
      </div>

      {successMessage && (
        <div className="toast">
          <div className="alert alert-success">
            <span>{successMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

// Reusable Input Field Component
const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => (
  <>
    <p>{label}</p>
    <label className="input input-bordered flex items-center">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="grow"
        placeholder={placeholder || label}
      />
    </label>
  </>
);
