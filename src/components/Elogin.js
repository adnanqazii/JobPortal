import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { LoggedInContext, ProfileContext, UserContext } from "../App";
// import Axios from "axios";

export default function ELogin() {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  const [user, setUser] = useContext(UserContext);
  const [profile, setProfile] = useContext(ProfileContext);
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  // const [profile, setProfile] = useState({
  //   //dummy state.It should be empty, requires database for login info to be  correct here
  //   email: "",
  //   password: "",
  //   name: "",
  //   age: "",
  //   lastSchool: "",
  //   lastQualification: "",
  //   type: "",
  //   recentJobsApplied: "",
  // });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Axios.post("http://localhost:3001/login", inputs)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log(response);
    //       const p = response.data[0];
    //       const obj = {
    //         name: p.Name,
    //         age: p.Age,
    //         email: p.Email,
    //         lastQualification: p.Last_Qualification,
    //         lastSchool: p.Last_School,
    //       };
    //       setProfile(obj);
    //       setLoggedIn(true);
    //       setError("");
    //       setUser("employee");
    //       history.push("/jobs");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("Wrong username /Password");
    //     setError("Incorrect email or password");
    //   });
    if (inputs.email === "employer" && inputs.password === "pass") {
      setLoggedIn(true);
      setProfile({
        //dummy
        name: "name",
        sector: "IT",
        location: "karachi",
        email: "email",
        pass: "pass",
      });
      setError("");
      setUser("employer");
      history.push("/portal");
    } else {
      setError("Incorrect email or password");
    }
  };
  // const Send_Login_Data = () => {
  //   // console.log("inputs", inputs);
  //   Axios.post("http://localhost:3001/login", inputs).then((response) => {
  //     if (response) {
  //       console.log(response);
  //       // console.log(response.data[0].Email);
  //       // console.log(response.data[0].Name);
  //       // console.log(response.data[0].Age);
  //     }
  //   });
  // };

  if (loggedIn) {
    return <div>Already logged in ..</div>;
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 4, width: "50%" },
      }}
      // noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
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
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
      <p>{error}</p>
    </Box>
  );
}
