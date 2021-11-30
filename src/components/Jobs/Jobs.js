import React, { Fragment } from "react";
import CardWrapper from "../Card/Card";
import "./style.css";
import { withRouter } from "react-router";

function Jobs({ loggedIn, user, location, jobs }) {
  // console.log(jobs);
  // if (!loggedIn) {
  //   return <div>Please log in..</div>;
  // }
  const search = location.search; // could be '?foo=bar'
  const params = new URLSearchParams(search);
  let title = params.get("title"); // bar
  if (title === null) {
    title = "";
  }
  // console.log({ title });
  return (
    <div className="jobs-main">
      {jobs?.map((job, i) => {
        // console.log(job.jobId);
        return (
          <Fragment key={i}>
            {job?.job_title?.includes(title) ? (
              <CardWrapper job={job} user={user} />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
export default withRouter(Jobs);
