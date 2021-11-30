import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
// import styles from "./style.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function CardWrapper({ job, user }) {
  const {
    job_id,
    job_title,
    job_desc,
    job_skills,
    job_career_level,
    job_date,
    job_no_of_positions,
    job_salary,
    job_years_of_experience,
    job_company,
  } = job;
  // console.log({ job_id });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [prompt, setprompt] = useState("");
  useEffect(() => {
    if (user === "employee") {
      setprompt("Apply");
    } else if (user === "employer") {
      setprompt("Stats");
    } else {
      setprompt("");
    }
  }, [user]);
  return (
    <Card
      sx={{
        maxWidth: !matches ? "70%" : "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 3,
        "& .MuiCardHeader-title": { fontWeight: 900 },
      }}
    >
      <CardHeader title={job_title} subheader={`${job_company}`} />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {job_desc}
        </Typography>
      </CardContent>

      <CardActions>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <div>EXP: {job_years_of_experience} Years</div>
          <div>{job_date.toDateString()}</div>
          <div>
            <Typography variant="body2" color="text.secondary">
              ${job_salary}
            </Typography>
          </div>
        </div>
      </CardActions>
      <CardActions>
        <Button size="small" component={Link} to={`/jobs/${job_id}`}>
          {prompt}
        </Button>
      </CardActions>
    </Card>
  );
}
