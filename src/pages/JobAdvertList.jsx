import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";
import ReactPaginate from "react-paginate";
import { split } from "lodash";





export default function JobAdvertList() {
  const [jobAdverts, setjobAdverts] = useState([]);


  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdvert()
      .then((result) => setjobAdverts(result.data.data));
    console.log("sa as sa");
    
  }, []);

 
     const [pageNumber, setPageNumber] = useState(0)
  
      const dataPerPage = 1
    const pagesVisited = pageNumber * dataPerPage
  
    const displayData = jobAdverts.slice(pagesVisited * dataPerPage, 2).map((data) => {
    
    return (
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
    )
  });
  const pageCount = Math.ceil(jobAdverts.length / dataPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className="data">
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
    {displayData}
      </Table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
