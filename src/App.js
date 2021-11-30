import AppBar from "./components/AppBar";
import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Jobs from "./components/Jobs/Jobs";
import Resume from "./components/Resume";
import Signup from "./components/Signup";
import Portal from "./components/Portal";
import Drawer from "./components/Drawer/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import SearchJobs from "./components/SearchJobs/SearchJobs";
import EmployerSignup from "./components/EmployerSignup";
import EmployerSettings from "./components/EmployerSettings/EmployerSettings";
import ELogin from "./components/Elogin";
const sample_jobs = [
  {
    job_id: 1,
    job_title: "senior software engineer",
    job_desc: "Want talented engineer",
    job_skills: "html,css",
    job_no_of_positions: 2,
    job_date: new Date(), //post date,
    job_salary: 1000,
    job_years_of_experience: 2,
    job_career_level: "Experienced Professional",
    job_company: "AICompany",
  },
  {
    job_id: 2,
    job_title: "junior software engineer",
    job_desc: "Want talented engineer",
    job_skills: "html,css",
    job_no_of_positions: 2,
    job_date: new Date(), //post date,
    job_salary: 1000,
    job_years_of_experience: 2,
    job_career_level: "Entry Level",
    job_company: "AICompany",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  // globalColor: "#14a800", //either add extra variable
  palette: {
    primary: {
      main: "#14a800", //or override
    },
  },
});
const drawerWidth = 240;

export const UserContext = createContext("");
export const ProfileContext = createContext("");
export const LoggedInContext = createContext("");
function App() {
  const userState = useState("");
  const [user, setUser] = userState;

  const profileState = useState({
    // //dummy state.It should be empty, requires database for login info to be  correct here

    email: "fgbf",
    password: "",
    name: "Adnan",
    age: "14",
    lastSchool: "dvdf",
    lastQualification: "fddfb",
    type: "employee",

    recentJobsApplied: sample_jobs,
  });
  const [profile, setProfile] = profileState;
  // const p =
  //   user === "employee"
  //     ? [employeeProfile, setEmployeeProfile]
  //     : [employerProfile, setEmployerProfile];
  // const userInfo = p[0].userInfo;
  const loggedInState = useState(false);
  const [loggedIn, setLoggedIn] = loggedInState;

  const [jobs, setJobs] = useState(sample_jobs);
  const [mobileOpen, setMobileOpen] = useState(false);

  // console.log({ userInfo });
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <UserContext.Provider value={userState}>
            <ProfileContext.Provider value={profileState}>
              <LoggedInContext.Provider value={loggedInState}>
                <AppBar
                  setMobileOpen={setMobileOpen}
                  loggedIn={loggedIn}
                  drawerWidth={drawerWidth}
                  mobileOpen={mobileOpen}
                />
                <Grid container spacing={2}>
                  {loggedIn && (
                    <Grid item xs="auto">
                      <Drawer
                        profile={profile}
                        drawerWidth={drawerWidth}
                        mobileOpen={mobileOpen}
                        loggedIn={loggedIn}
                        setMobileOpen={setMobileOpen}
                      />
                    </Grid>
                  )}

                  <Grid item xs>
                    {/* <Item> */}
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                      <Route path="/elogin">
                        <ELogin />
                      </Route>
                      <Route path="/login">
                        <Login />
                      </Route>
                      <Route path="/esignup">
                        <EmployerSignup />
                      </Route>
                      <Route path="/signup">
                        <Signup />
                      </Route>

                      <Route path="/profile">
                        <Profile />
                      </Route>
                      <Route path="/jobs/:id">
                        <Resume user={user} jobs={jobs} />
                      </Route>
                      <Route path="/jobs">
                        <SearchJobs />
                        <Jobs loggedIn={loggedIn} jobs={jobs} user={user} />
                      </Route>
                      <Route path="/settings">
                        {user === "employee" ? (
                          <Settings />
                        ) : (
                          <EmployerSettings />
                        )}
                      </Route>

                      <Route path="/portal">
                        <Portal
                          user={user}
                          loggedIn={loggedIn}
                          setJobs={setJobs}
                          jobs={jobs}
                        />
                        {/*for employer only*/}
                      </Route>
                      <Route path="/">
                        <SearchJobs />
                        <Jobs loggedIn={loggedIn} jobs={jobs} user={user} />
                      </Route>
                    </Switch>
                    {/* </Item> */}
                  </Grid>
                </Grid>

                {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
              </LoggedInContext.Provider>
            </ProfileContext.Provider>
          </UserContext.Provider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
