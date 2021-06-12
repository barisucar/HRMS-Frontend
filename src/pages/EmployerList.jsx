import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {

    
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])

    return (    


    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firma ismi</Table.HeaderCell>
            <Table.HeaderCell>Firma Site</Table.HeaderCell>
            <Table.HeaderCell>Firma telefon numarasi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

            <Table.Body>
                {
                    employers.map((employer) => (
                        <Table.Row>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.companyWebsite}</Table.Cell>
                            <Table.Cell>{employer.phone}</Table.Cell>
                    </Table.Row>
                ))
                }

        </Table.Body>
      </Table>
    </div>
  );
}
