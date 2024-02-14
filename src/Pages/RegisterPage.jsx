import { useState } from "react";

import logo from "../logo.svg";

import Page from "../components/Page";
import Header from "../components/Header";
import Section from "../components/Section";
import Card from "../components/CardElement";
import Subtitle from "../components/Subtitle";
import Bullets from "../components/BulletList";
import InputElement from "../components/Input";
import Button from "../components/Button";
import Row from "../components/Row";
import Or from "../components/or";
import Result from "../components/Result";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setlastName] = useState("");
  const [userName, setuserName] = useState("");

  function showDetails() {
    console.log(firstName);
    console.log(lasttName);
    console.log(userName);
  }

  function showfirsttName(event) {
    setFirstName(event.target.value);
  }
  function showLastName(event) {
    setlastName(event.target.value);
  }
  function showUserName(event) {
    setuserName(event.target.value);
  }
  return (
    <Page>
      <Section>
        <Header h1Content="Plan Your Daily Life" />
        <Subtitle
          paragraphElement="Join Over 30,000 people planning and tracking their life with Lifely"
          variant="first"
        ></Subtitle>
        <div style={{ paddingBlock: "3.3rem" }}>
          <Bullets paragraph="Improved organization and time management"></Bullets>
          <Bullets paragraph="Enchanced collaboration"></Bullets>
          <Bullets paragraph="Flexibility and customization"></Bullets>
        </div>
        <Result>
          {firstName}
          {lasttName}
          {userName}
        </Result>
      </Section>
      <Section>
        <Card>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "4rem", display: "block", marginInline: "auto" }}
          />
          <Subtitle paragraphElement="Get Started with Lifely"></Subtitle>
          <Row>
            <InputElement
              InputType="text"
              placeholderText="First Name"
              onChangeName={showfirsttName}
            ></InputElement>
            <InputElement
              InputType="text"
              placeholderText="Last Name"
              onChangeName={showLastName}
            ></InputElement>
          </Row>
          <InputElement InputType="text" placeholderText="Email"></InputElement>
          <InputElement
            InputType="text"
            placeholderText="UserName"
            onChangeName={showUserName}
          ></InputElement>
          <InputElement
            InputType="password"
            placeholderText="Password"
          ></InputElement>
          <Button variant="contained" onDisplay={showDetails}>
            Register
          </Button>
          <Or></Or>
          <Row>
            <Button>Google</Button>
            <Button>FaceBook</Button>
            <Button>Twitter</Button>
          </Row>
          <p style={{ textAlign: "center" }}>
            Already Have a Account?
            <span style={{ color: "rgb(108,151,132)" }}>Login</span>
          </p>
        </Card>
      </Section>
    </Page>
  );
}
export default RegisterPage;
