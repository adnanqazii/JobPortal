import { Divider, ListItem } from "@mui/material";
import List from "@mui/material/List";
import { LoggedInContext, ProfileContext, UserContext } from "../../App";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

export default function Profile() {
  const [profile] = useContext(ProfileContext);
  console.log({ profile });
  const [loggedIn] = useContext(LoggedInContext);
  const [user] = useContext(UserContext);
  // console.log({ profile, ProfileContext });
  if (!loggedIn) {
    return null;
  }

  // console.log({ profile });

  // console.log({ profile });
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <List>
        {/* {Object.keys(userInfo).map((key, index) => {
          //requires formatting keys in title case
          return (
            <p key={index} style={{ textAlign: "center" }}>
              {key}:{userInfo[key]}
            </p>
          );
        })}
         */}
        {user === "employee" ? (
          <Fragment>
            <ListItem>Name: {profile.name}</ListItem>
            <ListItem>Age: {profile.age}</ListItem>
            <ListItem>Email: {profile.email}</ListItem>
            <ListItem>Last School: {profile.lastSchool}</ListItem>
            <ListItem>Last Qualification: {profile.lastQualification}</ListItem>
            {profile.recentJobsApplied && (
              <Fragment>
                <ListItem>Recent Jobs Applied:</ListItem>
                <ListItem>
                  <List>
                    {profile.recentJobsApplied.map((job, index) => {
                      return (
                        <Fragment key={index}>
                          <ListItem>
                            <Link
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                              to={`/jobs/${job.job_id}`}
                            >
                              {job.job_title}
                            </Link>
                          </ListItem>
                          <Divider />
                        </Fragment>
                      );
                    })}
                  </List>
                </ListItem>
              </Fragment>
            )}
          </Fragment>
        ) : user === "employer" ? (
          <Fragment>
            <ListItem>Name: {profile.name}</ListItem>
            <ListItem>Sector: {profile.sector}</ListItem>
            <ListItem>Location: {profile.location}</ListItem>
          </Fragment>
        ) : (
          <div>Log in!</div>
        )}
      </List>
    </div>
  );
}
