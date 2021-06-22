import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import JobAdvertService from "../services/JobAdvertService";
import { FormField,Button } from "semantic-ui-react";
import "react-toastify/dist/ReactToastify.min.css";


export default function FormicExample() {

  return (
    <div>
      <Formik
        initialValues={{
          jobDescription: "",
          minSalary: "",
          maxSalary: "",
          openPositionCount: "",
          applicationDeadline: "",
          employerId: "",
          jobPositionId: "",
          cityId: "",
          workType: "",
          workHourType: "",
        }}
        validationSchema={Yup.object({
          cityId: Yup.number().required("Lutfen sehir seciniz."),
          minSalary: Yup.number().required("Lutfen mayış belirtin."),
          maxSalary: Yup.number().required("Lutfen mayış belirtin."),
          openPositionCount: Yup.number().required(
            "Lutfen acik pozisyon sayisini yaziniz."
          ),
          employerId: Yup.number().required("Lutfen is veren idsini giriniz."),
          jobPositionId: Yup.number().required("Lutfen is kolu seciniz."),
          jobDescription: Yup.string().required("Lutfen aciklama yaziniz."),
          applicationDeadline: Yup.date(),
        })}
        onSubmit={(values, { setSubmitting, resetFrom }) => {
          let jobAdvertService = new JobAdvertService();
          jobAdvertService.addJobAdvert(values).then((result) => {
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
         
            <form onSubmit={handleSubmit}>
              <FormField>
                <p><label htmlFor="jobDescription">Is aciklamasi</label></p>
                          <textarea />
                {errors.jobDescription && touched.jobDescription}
                      </FormField>
                      <Button type="submit">İlan Ver</Button>
            </form>
         
        )}
      </Formik>
    </div>
  );
}

