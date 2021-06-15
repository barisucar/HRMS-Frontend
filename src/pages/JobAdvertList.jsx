import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";

export default function JobAdvertList() {

const [jobAdverts, setjobAdverts] = useState([])

    
    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvert().then(result=>setjobAdverts(result.data.data))
    },[])

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
              <Table.Cell><Link to={`/job-adverts/${jobAdvert.jobAdvertisementId}`}>{jobAdvert?.job?.jobName}</Link></Table.Cell>
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
