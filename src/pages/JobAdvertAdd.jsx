import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Form, Message } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
import { toast, ToastContainer } from "react-toastify";

export default function JobAdvertAdd() {
  let jobAdvertService = new JobAdvertService();

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      jobDescription: "",
      minSalary: "",
      maxSalary: "",
      numberOfOpenPositions: "",
      applicationDeadline: "",
      employerId: "",
      jobPositionId: "",
      cityId: "",
      workType: "",
      workHourType: "",
    },
    validationSchema: Yup.object({
      jobDescription: Yup.string().required("Description should not be empty!"),
      minSalary: Yup.number().required("Min salary should not be empty!"),
      maxSalary: Yup.number().required("Max salary should not be empty!"),
      openPositionCount: Yup.number().required(
        "Open Position Count should not be empty!"
      ),
      applicationDeadline: Yup.date().required(
        "Application deadline should not be empty!"
      ),
      employerId: Yup.number().required("Employer should not be empty!"),
      jobPositionId: Yup.string().required("Job Position should not be empty!"),
      cityId: Yup.number().required("City should not be empty!"),
    }),
    onSubmit: (values) => {
      jobAdvertService.addJobAdvert(values).then();
    },
  });

  const workTypeOptions = [
    {
      key: "1",
      text: "Uzaktan",
      value: "1",
    },
    {
      key: "2",
      text: "Ofisten",
      value: "2",
    },
  ];

  const workHourTypeOptions = [
    {
      key: "1",
      text: "Full time",
      value: "1",
    },
    {
      key: "2",
      text: "Part time",
      value: "2",
    },
  ];

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <form onSubmit={handleSubmit && toast.success("Ilan verildi!")  }>
        <Form.Field>
          <label>Açıklama</label>
          <input
            name="jobDescription"
            placeholder="Açıklama"
            value={values.jobDescription}
            onChange={handleChange}
          />
          {errors.jobDescription && touched.jobDescription && (
            <Message color="red">{errors.jobDescription}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Minimum Maaş</label>
          <input
            name="minSalary"
            placeholder="Minimum Maaş"
            value={values.minSalary}
            onChange={handleChange}
          />
          {errors.minSalary && touched.minSalary && (
            <Message color="red">{errors.minSalary}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Maksimum Maaş</label>
          <input
            name="maxSalary"
            placeholder="Maksimum Maaş"
            value={values.maxSalary}
            onChange={handleChange}
          />
          {errors.maxSalary && touched.maxSalary && (
            <Message color="red">{errors.maxSalary}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Açık Pozisyon Sayısı</label>
          <input
            name="numberOfOpenPositions"
            placeholder="Açık Pozisyon Sayısı"
            value={values.numberOfOpenPositions}
            onChange={handleChange}
          />
          {errors.numberOfOpenPositions && touched.numberOfOpenPositions && (
            <Message color="red">{errors.numberOfOpenPositions}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Son Başvuru Tarihi</label>
          <input
            name="applicationDeadline"
            type="date"
            value={values.applicationDeadline}
            onChange={handleChange}
          />
          {errors.applicationDeadline && touched.applicationDeadline && (
            <Message color="red">{errors.applicationDeadline}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>İşveren</label>
          <input
            name="employerId"
            value={values.employerId}
            onChange={handleChange}
          />
          {errors.employerId && touched.employerId && (
            <Message color="red">{errors.employerId}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>İş pozisyonu</label>
          <input
            name="jobPositionId"
            value={values.jobPositionId}
            onChange={handleChange}
          />
          {errors.jobPositionId && touched.jobPositionId && (
            <Message color="red">{errors.jobPositionId}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Şehir</label>
          <input name="cityId" value={values.cityId} onChange={handleChange} />
          {errors.cityId && touched.cityId && (
            <Message color="red">{errors.cityId}</Message>
          )}
        </Form.Field>
        <Form.Field>
          <label>Çalışma Tipi</label>
          <Dropdown
            placeholder="Select Work Type"
            fluid
            selection
            options={workTypeOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Çalışma Saati</label>
          <Dropdown
            placeholder="Select Work Hour Type"
            fluid
            selection
            options={workHourTypeOptions}
          />
        </Form.Field>
        <Button type="submit">İlan Ver</Button>
      </form>
    </div>
  );
}
