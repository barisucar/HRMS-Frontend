import React, { useEffect, useState } from 'react'
import { Table } from "semantic-ui-react";
import JobSeekerService from '../services/jobSeekerService';


export default function JobSeekerList() {

 const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeeker().then(result=>setJobSeekers(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name </Table.HeaderCell>
            <Table.HeaderCell>Last Name </Table.HeaderCell>
            <Table.HeaderCell>Cover Letter </Table.HeaderCell>
            <Table.HeaderCell>School Name </Table.HeaderCell>
            <Table.HeaderCell>Known language </Table.HeaderCell>
            <Table.HeaderCell>GitHub </Table.HeaderCell>
            <Table.HeaderCell>Linkedin </Table.HeaderCell>
            <Table.HeaderCell>Known technology system </Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.resume.coverLetter}</Table.Cell>
              <Table.Cell>{jobSeeker.education.school.schoolName}</Table.Cell>
              <Table.Cell>{jobSeeker.language.languageName}</Table.Cell>
              <Table.Cell>{jobSeeker.link.githubLink}</Table.Cell>
              <Table.Cell>{jobSeeker.link.linkedinLink}</Table.Cell>
              <Table.Cell>{jobSeeker.skill.technologySystemName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
