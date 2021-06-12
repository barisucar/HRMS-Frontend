import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({SignedIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={SignedIn}>Giris Yap</Button>
        <Button  style={{ marginLeft: "0.5em" }}>Kayit Ol</Button>
        <Button as={NavLink} to="/job-adverts-add" style={{ marginLeft: "0.5em" }} primary>Ilan ver</Button>
      </Menu.Item>
    </div>
  );
}
