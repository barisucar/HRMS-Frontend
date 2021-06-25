import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
import CustomTextInput from "../utilities/customFormControls/CustomTextInput";

export default function JobAdAdd() {
  const initialValues = {
    applicationDeadline: "",
    cityId: "",
    employerId: "1",
    jobId: "",
    jobAdvertisementId: 0,
    maxSalary: "",
    minSalary: "",
    numberOfOpenPositions: "",
    jobWorkTypeId: "",
    jobWorkHourTypeId: "",
    jobDescription: "",
  };

  let jobAdvertService = new JobAdvertService();

  const schema = Yup.object({
    applicationDeadline: Yup.date().required(
      "Bir bitis tarihi girmeniz gerekmektedir!"
    ),
    cityId: Yup.number().required("Sehir girmeniz gerekmektedir!"),
    employerId: Yup.number().required(
      "Sistemimiz gelisene kadar isveren idnizi yaziniz!"
    ),
    jobId: Yup.number().required("Lutfen listeden is kolu seciniz"),
    // jobWorkHourTypeId: Yup.array()
    //   .oneOf()
    //   .required("Lutfen listeden calisma saati tipini seciniz seciniz"),
    // jobWorkTypeId: Yup.array()
    //   .oneOf()
    //   .required("Lutfen calisma tipini seciniz."),
    maxSalary: Yup.number().required(
      "Verebileceginiz maximum ucreti yazmaniz gerekmektedir!"
    ),
    minSalary: Yup.number().required(
      "Verebileceginiz minimum ucreti yazmaniz gerekmektedir!"
    ),
    numberOfOpenPositions: Yup.number().required(
      "Lutfen acik pozisyon sayisini yaziniz!"
    ),
    jobDescription: Yup.string().required("Aciklama zorunludur"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          jobAdvertService.addJobAdvert(values);
        }}
      >
        <Form className="ui form">
          <CustomTextInput name="jobId" placeholder="Job id" />
          <CustomTextInput
            name="jobDescription"
            placeholder="Job description"
          />
          <CustomTextInput name="employerId" placeholder="employer id" />
          <CustomTextInput name="cityId" placeholder="City id" />
          <FormField>
            <Field
              type="date"
              name="applicationDeadline"
              placeholder="Deadline"
            ></Field>
            <ErrorMessage
              name="applicationDeadline"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField>
          <CustomTextInput name="maxSalary" placeholder="Max Salary" />
          <CustomTextInput name="minSalary" placeholder="Min Salary" />
          <CustomTextInput
            name="numberOfOpenPositions"
            placeholder="Number of Open Positions"
          />
          <CustomTextInput name="jobWorkTypeId" placeholder="Job work type" />
          <CustomTextInput
            name="jobWorkHourTypeId"
            placeholder="Job work hour type"
          />
          <Button color="blue" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
