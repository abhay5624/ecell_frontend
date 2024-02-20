import React from "react";
//for Css
import styled from "styled-components";
import "../styles/Register.css";
import { useState } from "react";
 import { useNavigate } from "react-router-dom";

//Icons
import LoadingGif from "../images/Icon/loading-loader.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBuilding,faEnvelope, faCommentDots, faUsersRectangle,faArrowRight} from "@fortawesome/free-solid-svg-icons";
export const Contactus = () => {
  const Navigate = useNavigate();
  const [ startUp, setStartup ] = useState({
    name: "",
    email: "",
    registrationNo: "",
    mobno: null,
    team: null,
    field: "",
    title: "",
    description: "",
    Requirements: "",
    phase: "",
    password: "",
  })
  const [loader, setLoader] = useState(false);
  const submitForm = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      console.log("this run")
      //https://ecellnitjsr-backend.onrender.com
      const respond = await fetch("https://ecellnitjsr-backend.onrender.com/api/auth/startregistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(startUp)
      });
      
      // Axios automatically parses the response, so no need for respond.json()
      console.log(respond);
    
      if (respond.ok) {
        setLoader(false);
        alert("Startup registration successful");
        setStartup({
          name: "",
          email: "",
          registrationNo: "",
          mobno: null,
          team: null,
          field: "",
          title: "",
          description: "",
          Requirements: "",
          phase: ""
        });
        Navigate('/')
      } else {
        setLoader(false);
        const error = await respond.json();
        console.log(error);
        let msg;
        error.msg ? msg = error.errorHandle.message : msg ="Can't register";
        alert(msg);
      }
    } catch (error) {
      setLoader(false);
      console.error("Network error:", error);
        let msg;
        error.errorHandle ? msg = error.errorHandle.message : msg ="";
        alert("Can't register",msg);
    }
  }
  return (
    <div style={{ "backgroundColor": "#f0f0f0", "padding": "10px" }}>
      {loader ? (<Loader >
        <div>
          <img src={LoadingGif} alt="" />
        <h1>LOADING...</h1>
      </div></Loader>) : ""}
      <RegisterBox style={{ padding: "5%" }}>
        {/*/Text is a div that contain all the social media link */}
        <Text>
          <div className="TextHeader">
            <h2>Let's Work</h2>
            <h2>Together!</h2>
          </div>
          <div className="Textbody">
            <p>
            Let's join forces with the E-Cell to cultivate innovation and entrepreneurial excellence. Together, we can create a vibrant ecosystem that empowers students, providing mentorship and resources to turn ideas into successful ventures. Our collaboration fosters a dynamic environment where creativity thrives, shaping the next generation of entrepreneurs. Join us in building a community that embraces innovation, takes risks, and contributes to positive societal and economic impact. Together with the E-Cell, let's inspire and support the entrepreneurial journey.
            </p>
            {/*/Icon with Links */}
            <div className="Contact_info">
              <Flexbox>
                <FontAwesomeIcon icon={faEnvelope} className="links"/>
                <h4>ecell@nitjsr.ac.in</h4>
              </Flexbox>
              <Flexbox> 
                <FontAwesomeIcon icon={faBuilding} className="links"/>
                <h4>Nit jsr, Adityapur 2 , Jamshedpur , jharkhand</h4>
              </Flexbox>
              <Flexbox>
              <FontAwesomeIcon icon={faPhone} className="links"/>
                <h4>+91 9559754134</h4>
              </Flexbox>
            </div>
          </div>
        </Text>
        {/*/Register Form is in this container */}
        <RegisterForm>
          <form onSubmit={(e) => {submitForm(e)}}>
            <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faUsersRectangle} className="FormIcon"/>
              <input required type="text" name="name" id="name" placeholder="Name" value={startUp.name} onChange={(e) => {setStartup({...startUp, name: e.target.value})}}   />
              <br />
              <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faEnvelope} className="FormIcon"/>
                <input required type="email" name="email" id="email" placeholder="Email" value={startUp.email} onChange={(e) => {setStartup({...startUp, email: e.target.value})}}   />
              <br />
            </div>
              <input required type="reg_no" name="reg_no" id="reg_no" placeholder="Registration no" value={startUp.registrationNo} onChange={(e) => {setStartup({...startUp, registrationNo: e.target.value})}}   />
              <br />
              <input required type="number" name="number" id="number" placeholder="Contact no" value={startUp.mobno} onChange={(e) => {setStartup({...startUp, mobno: e.target.value})}}   />
              <br />
              <input required type="number" name="num_team_member" id="num_team_member" value={startUp.team} placeholder="Number of Team Members" onChange={(e) => {setStartup({...startUp, team: e.target.value})}}/>
              <input required type="text" name="startup_field" id="startup_field" value={startUp.field} placeholder="The field to which your startup idea belongs to" onChange={(e) => {setStartup({...startUp, field: e.target.value})}}/>
              <br />
              <input required type="text" name="title" id="title" placeholder="Title of your idea" value={startUp.title} onChange={(e) => {setStartup({...startUp, title: e.target.value})}}/>
              <br />
              <input required type="text" name="requirments" id="requirments" value={startUp.Requirements} placeholder="Requirments if any" onChange={(e) => {setStartup({...startUp, Requirements: e.target.value})}}/>
              <br />
              <input required type="text" name="phase" id="phase" placeholder="At what phase your idea is" value={startUp.phase} onChange={(e) => {setStartup({...startUp, phase: e.target.value})}}/>
              <br />
              <input required type="password" name="password" id = "password" placeholder="Password" value={startUp.password} onChange={(e) => {setStartup({...startUp, password: e.target.value})}}/>
            </div>
            <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faCommentDots} className="FormIcon"/>
              <textarea
                name="Description"
                id="message"
                cols="30"
                rows="10"
                placeholder="Description"
                value={startUp.description}
                required
                onChange={(e) => {setStartup({...startUp, description: e.target.value})}}
              ></textarea>
            </div>
            <div style={{ position: "relative", width: "max-content" }}>
            <FontAwesomeIcon icon={faArrowRight} className="SubmitArrow"/>
              <input type="submit" value="Let Talk" onClick={(e) => {submitForm(e)}}/>
            </div>
          </form>
        </RegisterForm>
      </RegisterBox>
    </div>
  );
};
const Loader = styled.div`
  background: #fff;
  display: flex;
  position: fixed;
  align-items:center;
  color: white;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  z-index: 100;
  top: 0;
  left:0;
  h1{
    text-align: center;
  }
`;
const RegisterBox = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Aboutus = styled.div`
  width: 60%;
  margin: 2% 20% 0 20%;
  background-color: #f0f0f0;
  h2 {
    font-size: 30px;
    text-align: center;
    color: #0b1b35;
    font-family: "Inter", sans-serif;
    padding: 5px;
  }
  p {
    color: #666;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 2% 5% 0 5%;
  }
`;
const Flexbox = styled.div`
  display: flex;
`;
const Text = styled.div`
  width: 40%;
  color: #0b1b35;
  @media (max-width: 768px) {
    width: 100%;
  }
  h2 {
    font-size: 30px;
    color: #0b1b35;
    font-family: "Inter", sans-serif;
    padding: 5px;
  }
  .Textbody {
    padding-top: 10px;
    width: 80%;
    @media (max-width: 768px){
      width: 100%;
    }
    p {
      color: #666;
    }
    .Contact_info {
      div {
        align-item: center;
      }
      padding-top: 15px;
      h4 {
        margin: 5px 0 5px 0;
      }
      .links {
        color: #190482;
        width: 50px;
        padding: 10px;
      }
    }
  }
`;

const RegisterForm = styled.div`
  width: 60%;
  font-family: "Inter", sans-serif;
  @media (max-width: 768px) {
    width: 100%;
  }
  h2 {
    color: #0b1b35;
    font-family: "Inter", sans-serif;
  }
  input {
    width: 90%;
    padding: 12px;
    margin: 5px;
    border: solid #190482 2px;
    border-radius: 5px;
    font-size: 15px;
  }
  input[type="submit"] {
    width: max-content;
    padding: 15px;
    padding-right: 50px;
    color: white;
    background: #190482;
    font-size: 20px;
    transition: 0.5s;
  }
  input[type="submit"]:hover {
    color: #190482;
    border: solid 3px #190482;
    background-color: #fff;
    .SubmitArrow{
      color: #190482;
    }
  }

  textarea {
    width: 90%;
    padding: 12px;
    margin: 5px;
    border: solid #190482 2px;
    border-radius: 5px;
    font-size: 15px;
  }
  .FormIcon {
    color: #190482;
    position: absolute;
    top: 15px;
    right: 11%;
    width: 25px;
  }
  .SubmitArrow{
    width: 40px;
    position: absolute;
    top: 30px;
    right: 20px;
    color: white;
    
  }
`;
export default Contactus;
