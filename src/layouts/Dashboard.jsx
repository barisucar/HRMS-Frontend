import React from "react";
import { Route } from "react-router";
import { Container, Grid, GridColumn, Input, Menu } from "semantic-ui-react";
import ConfirmJobAdvertById from "../pages/ConfirmJobAdvertById";
import formilk from "../pages/formilk";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import JobAdvertList from "../pages/JobAdvertList";
import DataDetail from "./DataDetail";
import { toast, ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    
    <div>
      <ToastContainer position="bottom-right" />

          <Route exact path="/" component={DataDetail} />
          <Route exact path="/job-adverts" component={JobAdvertList} />
          <Route path="/job-adverts/:id" component={JobAdvertDetail} />
      <Route exact path="/job-adverts-add" component={JobAdvertAdd} />
      <Route exact path="/job-adverts-confirm" component={ConfirmJobAdvertById} />
      <Route exact path="/formik" component={formilk} />
    </div>
  );
}
