import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu fixed size="massive">
        <Menu.Item name="Ana Sayfa" />
        <Menu.Item name="Bize katil!!" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button className="loginButton" primary>
              Login
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
