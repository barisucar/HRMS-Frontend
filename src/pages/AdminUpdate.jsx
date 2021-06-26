import React from "react";
import CustomTextInput from "../utilities/customFormControls/CustomTextInput";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SystemPersonelService from "../services/SystemPersonelService";
import { FormField, Button, Label } from "semantic-ui-react";

export default function ResumeUpdate() {
  const initialValues = {
    departmentId: "",
    firstName: "",
    lastName: "",
    id: "",
    };
    
    let systemPersonelService = new SystemPersonelService();
  const schema = Yup.object({
    firstName: Yup.string().required("Isminizi girmeniz gerekmektedir"),
    lastName: Yup.string().required("Soy adinizini girmeniz gerekmektedir!"),
    id: Yup.number().required("Guncellenecek kullanicinin idsini yaziniz"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
            systemPersonelService.updateSystemPersonel(values);
        }}
      >
        <Form className="ui form">

          <CustomTextInput name="id" placeholder="admin Id" />
          <CustomTextInput name="firstName" placeholder="first name" />
          <CustomTextInput
            name="lastName"
            placeholder="last name"
          />

 
          <Button color="blue" type="submit">
            guncelle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
