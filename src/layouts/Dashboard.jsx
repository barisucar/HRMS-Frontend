import React from "react";
import { Route } from "react-router";
import ConfirmJobAdvertById from "../pages/ConfirmJobAdvertById";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import JobAdvertList from "../pages/JobAdvertList";
import DataDetail from "./DataDetail";
import { ToastContainer } from "react-toastify";
import JobAdAdd from "../pages/JobAdAdd";
import AdminUpdate from "../pages/AdminUpdate";
import ResumeUpdate from "../pages/ResumeUpdate";
import JobAdvertListByCity from "../pages/JobAdvertListByCity";
import JobAdvertListPageable from "../pages/JobAdvertListPageable";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />

      <Route exact path="/" component={DataDetail} />
      <Route exact path="/job-adverts" component={JobAdvertList} />
      <Route
        exact
        path="/job-adverts/bycityid"
        component={JobAdvertListByCity}
      />
      <Route path="/job-adverts/:id" component={JobAdvertDetail} />
      <Route exact path="/job-adverts-add" component={JobAdvertAdd} />
      <Route
        exact
        path="/job-adverts-confirm"
        component={ConfirmJobAdvertById}
      />
      <Route exact path="/job-ad/add" component={JobAdAdd} />
      <Route exact path="/update/admin" component={AdminUpdate} />
      <Route exact path="/update/resume" component={ResumeUpdate} />
      <Route exact path="/adverto" component={JobAdvertListPageable} />
      
    </div>
  );
}
