import React from "react";
import { Route } from "react-router";
import ConfirmJobAdvertById from "../pages/ConfirmJobAdvertById";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import JobAdvertList from "../pages/JobAdvertList";
import DataDetail from "./DataDetail";
import {  ToastContainer } from "react-toastify";
import JobAdAdd from "../pages/JobAdAdd";

export default function Dashboard() {
  return (
    
    <div>
      <ToastContainer position="bottom-right" />

          <Route exact path="/" component={DataDetail} />
          <Route exact path="/job-adverts" component={JobAdvertList} />
          <Route path="/job-adverts/:id" component={JobAdvertDetail} />
      <Route exact path="/job-adverts-add" component={JobAdvertAdd} />
      <Route exact path="/job-adverts-confirm" component={ConfirmJobAdvertById} />
      <Route exact path="/job-ad/add" component={JobAdAdd} />
    </div>
  );
}
