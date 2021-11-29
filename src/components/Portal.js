import { TextareaAutosize } from "@mui/material";
import React from "react";
import Jobs from "./Jobs/Jobs";
import { useState } from "react";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

export default function Portal({ user, loggedIn, setJobs, jobs }) {
  const history = useHistory();
  const [inputs, setinputs] = useState({});

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
    setJobs((jobs) => [
      ...jobs,
      {
        title: inputs.title,
        desc: inputs.desc,
      },
    ]);
    history.push("/jobs");
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
            width: "50%",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              required
              label="Title"
              value={inputs.title || ""}
              onChange={handleChange}
              name="title"
            />
            <br />
            <TextareaAutosize
              width="100%"
              required
              label="Description"
              value={inputs.desc || ""}
              onChange={handleChange}
              name="desc"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Email"
                value={inputs.email || ""}
                onChange={handleChange}
                name="email"
              />
              <br />

              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={inputs.password || ""}
                onChange={handleChange}
                name="password"
              />
              <br />
              <TextField
                required
                id="outlined-required"
                label="Name"
                value={inputs.name || ""}
                onChange={handleChange}
                name="name"
              />
              <br />
              <TextField
                required
                id="outlined-required"
                label="Sector"
                value={inputs.sector || ""}
                onChange={handleChange}
                name="sector"
              />
            </div>

            <br />
            <TextField
              required
              id="outlined-required"
              label="Add Department"
              value={"department" || ""}
              // onChange={handleDepartment}
              name="department"
            />
            <List>
              {inputs.departments &&
                inputs.departments.map((department, i) => {
                  return <ListItem key={i}>{department}</ListItem>;
                })}
            </List>
            <Button

            // onClick={addDepartment}
            >
              Add
            </Button>
          </div>

          <Button variant="contained" onClick={handleSubmit}>
            Add
          </Button>
        </Box>
      </div>
    );
  }
  return <Jobs loggedIn={loggedIn} jobs={jobs} />;
}
