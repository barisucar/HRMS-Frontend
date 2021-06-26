import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
import CustomTextInput from "../utilities/customFormControls/CustomTextInput";
export default function JobAdvertList() {
  const initialValues = {
    id: "",
  };

  let { cityId } = useParams();
  cityId = 1;
  const [jobAdverts, setjobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdvertByCityId(cityId)
      .then((result) => setjobAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          cityId = values.id;
          console.log(cityId);
        }}
      >
        <Form className="uiform">
          <CustomTextInput name="id" placeholder="city id" />
          <Button color="blue" type="submit">
            Filtrele
          </Button>
        </Form>
      </Formik>
      <div></div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Name</Table.HeaderCell>
            <Table.HeaderCell>City </Table.HeaderCell>
            <Table.HeaderCell>Job Description </Table.HeaderCell>
            <Table.HeaderCell>Min Salary </Table.HeaderCell>
            <Table.HeaderCell>Number of Open Position </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.jobAdvertisementId}>
              <Table.Cell>
                <Link to={`/job-adverts/${jobAdvert.jobAdvertisementId}`}>
                  {jobAdvert?.job?.jobName}
                </Link>
              </Table.Cell>
              <Table.Cell>{jobAdvert?.city?.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.numberOfOpenPositions}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
