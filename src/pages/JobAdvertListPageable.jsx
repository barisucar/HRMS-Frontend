import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
import { Button, Pagination } from "semantic-ui-react";

export default function JobAdvertList() {
  const [jobAdverts, setjobAdverts] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
 
  let size=10
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdvertPageable(pageNumber, size)
      .then((result) => setjobAdverts(result.data.data.content));
    console.log("sa as sa");
  }, [pageNumber]);

  const handleNextClick = (e, { activePage }) => {
    setpageNumber(activePage);
  };
  return (
    <div>
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
                  {jobAdvert.job.jobName}
                </Link>
              </Table.Cell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvert.numberOfOpenPositions}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        onPageChange={handleNextClick}
        pointing
        secondary
        totalPages={3}
      />
    </div>
  );
}
