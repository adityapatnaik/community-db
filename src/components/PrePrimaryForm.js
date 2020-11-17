import React, { useState } from "react";
import { api } from "./api";
import axios from "axios";

export default function PrePrimary() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userAccessLevel, setUserAccessLevel] = useState("");
  const [dataLevel, setDataLevel] = useState("");
  const [primarySource, setPrimarySource] = useState("");
  const [secondarySource, setSecondarySource] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      "user-access-level": userAccessLevel,
      "data-level": dataLevel,
      "primary-source": primarySource,
      "secondary-source": secondarySource
    };
    console.log(data);
    // Rest Api Call
    axios
      .post(api, data)
      .then((data) => {
        console.log("PrePrimary Info Response:", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Pre Primary Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            onChange={(event) => {
              setName(event.currentTarget.value);
            }}
            name="name"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
            name="email"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">User Access Level</label>
          <input
            className="form-input"
            onChange={(event) => {
              setUserAccessLevel(event.currentTarget.value);
            }}
            name="user-access-level"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Data Level</label>
          <input
            className="form-input"
            onChange={(event) => {
              setDataLevel(event.currentTarget.value);
            }}
            name="data-level"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Primary Source</label>
          <input
            className="form-input"
            onChange={(event) => {
              setPrimarySource(event.currentTarget.value);
            }}
            name="primary-source"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Secondary Source</label>
          <input
            className="form-input"
            onChange={(event) => {
              setSecondarySource(event.currentTarget.value);
            }}
            name="secondary-source"
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
