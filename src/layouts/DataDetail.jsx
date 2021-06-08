import React from 'react'
import EmployerList from '../pages/EmployerList'
import {   Grid,Menu,Input, Container } from 'semantic-ui-react';
import DashboardMenu from './DashboardMenu';
import JobAdvertList from '../pages/JobAdvertList';
import JobSeekerList from '../pages/JobSeekerList';

export default function DataDetail() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Menu pointing vertical >
        <Menu.Item name="inbox">

          Inbox
        </Menu.Item>

        <Menu.Item name="spam">
    
          Spam
        </Menu.Item>

        <Menu.Item name="updates">
  
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search mail..." />
        </Menu.Item>
      </Menu>
                    {/* <DashboardMenu/>  */}
                    </Grid.Column>
                    <Grid.Column width={ 10}>
                    <EmployerList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={ 6 }>
                    <JobAdvertList/>
                    </Grid.Column>
                    <Grid.Column width={ 6}>
                    <JobSeekerList/>
                    </Grid.Column>
                
                </Grid.Row>
            </Grid>

           
            
           
            
        </div>
    )
}
