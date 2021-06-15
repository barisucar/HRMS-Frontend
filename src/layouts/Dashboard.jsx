import React from "react";
import { Route } from "react-router";
import { Container, Grid, GridColumn, Input, Menu } from "semantic-ui-react";
import ConfirmJobAdvertById from "../pages/ConfirmJobAdvertById";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import JobAdvertList from "../pages/JobAdvertList";
import DataDetail from "./DataDetail";

export default function Dashboard() {
  return (
    <div>

          <Route exact path="/" component={DataDetail} />
          <Route exact path="/job-adverts" component={JobAdvertList} />
          <Route path="/job-adverts/:id" component={JobAdvertDetail} />
      <Route exact path="/job-adverts-add" component={JobAdvertAdd} />
      <Route exact path="/job-adverts-confirm" component={ConfirmJobAdvertById} />
    </div>
  );
}
