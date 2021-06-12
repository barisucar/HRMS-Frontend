import React from "react";
import EmployerList from "../pages/EmployerList";
import { Grid, Menu, Input, Container } from "semantic-ui-react";
import JobAdvertList from "../pages/JobAdvertList";
import JobSeekerList from "../pages/JobSeekerList";

export default function DataDetail() {
  return (
    <div>
      <Grid>
        <Grid.Row>
           <Grid.Column width={10}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <JobAdvertList />
          </Grid.Column>
          <Grid.Column width={6}>
            <JobSeekerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
