import React, { useState } from "react";
import axios from "axios";
import { api } from "./api";

export default function TertiaryForm() {
  const [college, setCollege] = useState("");
  const [userAccessLevel, setUserAccessLevel] = useState("");
  const [photo, setPhoto] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      college: college,
      "user-access-level": userAccessLevel,
      photo: photo,
      twitter: twitter,
      linkedin: linkedin,
      github: github
    };
    console.log(data);
    // Rest Api Call
    axios
      .post(api, data, {
        crossdomain: true
      })
      .then((data) => {
        console.log("Tertiary Info Response:", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Tertiary Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">College/Company</label>
          <input
            className="form-input"
            onChange={(event) => {
              setCollege(event.currentTarget.value);
            }}
            name="college"
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
          <label className="form-label">Photo</label>
          <input
            className="form-input"
            onChange={(event) => {
              setPhoto(event.currentTarget.value);
            }}
            name="photo"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Twitter</label>
          <input
            className="form-input"
            onChange={(event) => {
              setTwitter(event.currentTarget.value);
            }}
            name="twitter"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">LinkedIn</label>
          <input
            className="form-input"
            onChange={(event) => {
              setLinkedin(event.currentTarget.value);
            }}
            name="linkedin"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">GitHub</label>
          <input
            className="form-input"
            onChange={(event) => {
              setGithub(event.currentTarget.value);
            }}
            name="github"
          ></input>
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
