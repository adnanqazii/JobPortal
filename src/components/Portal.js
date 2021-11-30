import { TextareaAutosize } from "@mui/material";
import React from "react";
import Jobs from "./Jobs/Jobs";
import { useState } from "react";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
const names = [
  "title",
  "desc",
  "skills",
  "years_of_experience",
  "no_of_positions",
  "salary",
  "career_level",
];
export default function Portal({ user, loggedIn, setJobs, jobs }) {
  const history = useHistory();
  const [inputs, setinputs] = useState({});
  const [prompt, setPrompt] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setinputs((values) => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    let ok = true;
    // console.log({ inputs });
    for (let i = 0; i < names.length; i++) {
      if (document.getElementsByName(names[i])[0].value === "") {
        ok = false;
        setPrompt("Inputs not OK");
      }
    }
    if (ok) {
      setPrompt("");
      setJobs((jobs) => [
        ...jobs,
        {
          job_title: inputs.title,
          job_desc: inputs.desc,
          job_skills: inputs.skills,
          job_years_of_experience: inputs.years_of_experience,
          job_no_of_positions: inputs.no_of_positions,
          job_salary: inputs.salary,
          job_career_level: inputs.career_level,
          job_date: new Date(),
          job_company: "employer",
        },
      ]);
      history.push("/jobs");
    }
  };
  //   console.log(loggedIn);
  if (user === "employer") {
    return (
      <div>
        <h2>Portal</h2>
        <h3>Add Job</h3>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%", m: 4 },
            "& textarea": { width: "100%", m: 4, minHeight: "10%" },
            width: "50%",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* <div> */}
          <TextField
            required
            label="Title"
            value={inputs.title || ""}
            onChange={handleChange}
            name="title"
          />
          <br />
          <TextareaAutosize
            placeholder="Description"
            width="100%"
            required
            label="Description"
            value={inputs.desc || ""}
            onChange={handleChange}
            name="desc"
          />
          {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            > */}
          <TextField
            required
            id="outlined-required"
            label="Skills"
            value={inputs.skills || ""}
            onChange={handleChange}
            name="skills"
          />
          <br />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="No of Positions"
            inputProps={{ min: 0 }}
            value={inputs.no_of_positions || ""}
            onChange={handleChange}
            name="no_of_positions"
          />
          <br />
          <TextField
            required
            type="number"
            inputProps={{ min: 0, step: 0.1 }}
            id="outlined-required"
            label="Years of Experience Required"
            value={inputs.years_of_experience || ""}
            onChange={handleChange}
            name="years_of_experience"
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="salary"
            type="number"
            inputProps={{ min: 0 }}
            value={inputs.salary || ""}
            onChange={handleChange}
            name="salary"
          />
          <br />
          {/* <TextField
            required
            id="outlined-required"
            label="Career Level"
            value={inputs.career_level || ""}
            onChange={handleChange}
            name="career_level"
          /> */}
          <FormControl sx={{ m: 4, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Career Level
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={inputs.job_career_level}
              label="Career Level"
              name="career_level"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Intern"}>Intern/Student</MenuItem>
              <MenuItem value={"Junior"}>Entry Level</MenuItem>
              <MenuItem value={"Senior"}>Experienced Professional</MenuItem>
              <MenuItem value={"GM/CEO/Country Head/President"}>
                GM/CEO/Country Head/President
              </MenuItem>
            </Select>
          </FormControl>
          <br />
          {/* </div> */}
          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
          {"  "}
          {prompt}
        </Box>
      </div>
    );
  }
  return <Jobs loggedIn={loggedIn} jobs={jobs} />;
}
