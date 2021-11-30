import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";

const Input = styled("input")({
  display: "none",
});

export default function Resume({ jobs, user }) {
  let { id } = useParams();
  // id = parseInt(id);
  const [submitted, setSubmitted] = useState(false);
  // console.log(jobs[i]d? - 1]);
  // console.log(id - 1);
  // if (!jobs) return null;
  // if (!id) return null;
  const {
    job_title,
    job_desc,
    job_company,
    job_date,
    job_salary,
    job_skills,
    job_no_of_positions,
    job_career_level,
  } = jobs[id - 1];

  // console.log({ jobs });

  let content = "";
  const handleSubmit = (e) => {
    //process
    setSubmitted(true);
  };
  if (user === "employee" && !submitted) {
    content = (
      <React.Fragment>
        <h2>Your Application:</h2>
        <div>
          <TextField label="Summary" />
        </div>
        <div>
          <label htmlFor="contained-button-file">
            <Input id="contained-button-file" multiple type="file" />
            <Button variant="outlined" component="span">
              Upload Resume/CV
            </Button>
          </label>
          <br />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  } else if (user === "employee") {
    content = <h2>Submitted..</h2>;
  } else if (user === "employer") {
    content = <h2>Candidates</h2>;
  } else {
    content = <h2>Please log in..</h2>;
  }

  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "10rem",
        marginLeft: 40,
      }}
    >
      <h1>{job_company}</h1>
      <h2>{job_title}</h2>
      <h3>{job_date.toDateString()}</h3>
      <h3>Description:</h3>
      <p>{job_desc}</p>
      <h3>Salary: ${job_salary}</h3>
      <h3>Skills: </h3>
      <p>{job_skills}</p>
      <h3>No of Positions: {job_no_of_positions}</h3>
      <h3>Career Level: {job_career_level}</h3>
      {content}
    </div>
  );
}
