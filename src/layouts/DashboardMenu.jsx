import React from "react";
import { Input, Label, Menu } from 'semantic-ui-react';

export default function DashboardMenu() {
  return (
    <div>
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
    </div>
  );
}
