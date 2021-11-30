import React from "react";
import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import { ProfileContext, LoggedInContext } from "../../App";
import { useHistory } from "react-router";
export default function EmployerSettings() {
  const loggedIn = useContext(LoggedInContext);
  const [profile, setProfile] = useContext(ProfileContext);
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: profile.email,
    password: profile.password,
    name: profile.name,
    sector: profile.sector,
    location: profile.location,
  });
  const [location, setLocation] = useState("");
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs.age);
    // console.log({ inputs });
    setProfile((prev) => {
      return { ...prev, ...inputs };
    });
    history.push("/");
  };

  const content = loggedIn ? (
    <div>
      <h3>Settings</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%", paddingBottom: "1rem" },
          m: "auto",
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        // noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
          <br />
          <TextField
            required
            id="outlined-required"
            label="Location"
            value={inputs.location || ""}
            onChange={handleChange}
            name="location"
          />
        </div>
        {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputs.type}
          label="User Type"
          name="type"
          onChange={handleChange}
        >
          <MenuItem value={"employer"}>Employer</MenuItem>
          <MenuItem value={"employee"}>Employee</MenuItem>
        </Select>
      </FormControl> */}
        <br />

        <Button
          style={{ marginTop: "3rem" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Box>
    </div>
  ) : (
    <p>Log in please</p>
  );

  return <React.Fragment>{content}</React.Fragment>;
}
