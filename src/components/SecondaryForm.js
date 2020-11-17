import React, { useState } from "react";
import axios from "axios";

export default function SecondaryForm() {
  const [interests, setInterests] = useState("");
  const [contribution, setContribution] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      interests: interests,
      contribution: contribution,
      skills: skills
    };
    console.log(data);
    axios
      .post(``, data, { crossdomain: true })
      .then((data) => {
        console.log("Secondary Info Response:", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Secondary Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Interests</label>
          <input
            className="form-input"
            onChange={(event) => {
              setInterests(event.currentTarget.value);
            }}
            name="interests"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Contribution</label>
          <input
            className="form-input"
            onChange={(event) => {
              setContribution(event.currentTarget.value);
            }}
            name="contribution"
          ></input>
        </div>
        <div className="form-group">
          <label className="form-label">Skills</label>
          <input
            className="form-input"
            onChange={(event) => {
              setSkills(event.currentTarget.value);
            }}
            name="skills"
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
