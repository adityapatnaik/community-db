import React, { useState } from "react";
import axios from "axios";
import { api } from "./api";

export default function PrimaryForm() {
  const [phoneno, setPhoneno] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      phone_no: phoneno,
      work_location: workLocation,
      city: city,
      state: stateName,
      country: country,
      pincode: pincode,
      DOB: dob,
      gender: gender
    };
    console.log(data);
    // Rest Api Call
    axios
      .post(api, data, {
        crossdomain: true
      })
      .then((data) => {
        console.log("Primary Info Response:", data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return (
    <div className="form-container">
      <h2>Primary Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            onChange={(event) => {
              setPhoneno(event.currentTarget.value);
            }}
            name="phoneno"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Current Working Location</label>
          <input
            className="form-input"
            onChange={(event) => {
              setWorkLocation(event.currentTarget.value);
            }}
            name="work_location"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">City</label>
          <input
            className="form-input"
            onChange={(event) => {
              setCity(event.currentTarget.value);
            }}
            name="city"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">State</label>
          <input
            className="form-input"
            onChange={(event) => {
              setStateName(event.currentTarget.value);
            }}
            name="state"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Country</label>
          <input
            className="form-input"
            onChange={(event) => {
              setCountry(event.currentTarget.value);
            }}
            name="country"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Pin Code</label>
          <input
            className="form-input"
            onChange={(event) => {
              setPincode(event.currentTarget.value);
            }}
            name="pincode"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">DOB</label>
          <input
            className="form-input"
            onChange={(event) => {
              setDob(event.currentTarget.value);
            }}
            name="DOB"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Gender</label>
          <input
            className="form-input"
            onChange={(event) => {
              setGender(event.currentTarget.value);
            }}
            name="gender"
          ></input>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <br />
    </div>
  );
}
