import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 const history = useHistory()
  function handleSignIn(params) {
    setIsAuthenticated(true)
  }

  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")
  }

  return (
    <div>
      <Menu fixed size="large">
        <Menu.Item as={NavLink} to="/" name="Ana Sayfa" />
        <Menu.Item name="Bize katil!!" />

        <Menu.Menu position="right">
          {isAuthenticated ? <SignedIn SignedOut={handleSignOut}  /> : <SignedOut SignedIn={handleSignIn} />}
        </Menu.Menu>
      </Menu>
    </div>
  );
}
