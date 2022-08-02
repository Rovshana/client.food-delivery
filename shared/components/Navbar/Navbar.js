import React from "react";
import { Button1, Button2, List, Nav, Ul } from "./Navbar.styled";

function Navbar(props) {
  return (
    <>
      <Nav className="container">
        <div>
          <img src="/foody.svg" alt=".." />
        </div>
        <Ul>
          <List>Home</List>
          <List>Restaurants</List>
          <List>About us</List>
          <List>How it works </List>
          <List>FAQs </List>
        </Ul>
        <div>
        <Button1>.</Button1>
          <Button2>Sign up</Button2>
          
        </div>
      </Nav>
    </>
  );
}
export default Navbar;
