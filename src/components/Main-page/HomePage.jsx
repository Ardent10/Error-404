import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Contact from "../Contact/contact";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo,Tracks} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {SponsorsHead, SponsorUS,Micro, MicroHead,Sponsor} from "../Sponsors/sponsors.jsx";
import CountDown from "../count-down/countDown.jsx";
// import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer1.jsx";
import {Member,} from "../team/team.jsx";
import TimelineItem from "../Timeline/Timeline.jsx";
import unstop from "../../Module/Assets/sponsorsLogos/unstop.svg";
import streamyard from "../../Module/Assets/sponsorsLogos/streamyard.png";

import {
  TOP_SECTION,
  TeamInfo,
  JudgesInfo,
  organizers,
  sponsorLogos,
  StudentPerks,
  MentorPerks,
  frequentlyAskedQuestions,
  Timeline,
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row>
    {/* <PrizeHeading type="OUR SPONSORS" className="subheading" id="timeline"/> */}
    <h1 className="subheading">OUR SPONSORS</h1>
    <hr className="hr"/>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          {" "}
          <Sponsor srcx={s.src} link={s.link} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}
function PerksGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={4} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}




function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
        <Accordion panels={ s }/>
        </Col>
      ))}
    </Row>
  );
}



export default function HomePage(props) {
  return (
    <div className="Whole_div" style={
      {
        background: '#121930',
        // backgroundImage: `url(${bg4})`
      }}
      
      >
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={6} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img src={TOP_SECTION.IMG_SRC} alt="resource"/>
            </Col>
          </Row>

        </Container>
      </div>
      <Container fluid>

          <Row className="mediaInfo" id="countdown">
            <Col className="" sm={12} lg={12} md={12}>
              <CountDown />
            </Col>
          </Row>
          
        
        {/* about section start */}
        {/* <Row className=" logoSection prizesection non-coding" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row> */}
        <div id="about">
          <Row className="aboutsection">
            <PrizeHeading type="About" />
            <hr className="hr"/>
            <Col className="info-div" sm={12} lg={8} md={8}>
              <LogoSectionAbout />
              <Logo />
            </Col>
          </Row>
        </div>

        {/* about section end */}

        <Row className="tracksection non-coding" id="tracks">
          <PrizeHeading type="Tracks" />
          <hr className="hr"/>
          {Tracks.map(PrizeGroup)}
        </Row>
       
       {/* Timeline Section */}
        <PrizeHeading type="Timeline" id="timeline"/>
         <hr className="hr"/>
        <Row className="timelinesection non-coding" id="timeline" >
            { Timeline.length > 0 && (
            <div className="timeline-container">
                {Timeline.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>)}
        </Row>

       {/* Timeline ends */}

        {/* ********Prizes here ***** */}
          <PrizeHeading type="Prize Categories" />
          <hr className="hr"/>
        <Row className="prizesection" id="prizes">
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}
        
        {/* ********Prizes here ***** */}
        <Row className="microsection">
          <PrizeHeading type="Perks & Benefits" />
          <hr className="hr"/>

            <h1 className="subheading">Participants</h1>
            <hr className="hr"/>

            <Row>

            <Row className="prizesection" id="prizes">
              {StudentPerks.map((s,idx)=>{
                console.log(s)
                return (                  
                    <Row key={idx} className="perks-container">
                      <h1 className="perks-h1">🌟 {s.type} </h1>
                      <p className="perks-p">{s.content}</p>
                    </Row>                    
                );
              })}
            </Row>
            
            <h1 className="subheading">Mentors</h1>
            <hr className="hr"/>
            <Row className="prizesection" id="prizes">
              {MentorPerks.map((s,idx)=>{
                console.log(s)
                return (                  
                    <Row key={idx} className="perks-container">
                      <h1 className="perks-h1">🌟 {s.type} </h1>
                      <p className="perks-p">{s.content}</p>
                    </Row>                    
                );
              })}
            </Row>
            </Row>


          </Row>
        {/* ********Prizes ending here ***** */}

        {/* Micro */}
        <Row className="microsection" id="micro">
          <PrizeHeading type="Short Stint To Micro" />
          <hr className="hr"/>
          <Micro />
          <MicroHead />

        </Row>
        {/*Micro end*/}

        {/* ********Sponsors here ***** */}

        {/* <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row> */}


        <div id="sponsors">
          <Row className="sponsorsection">
            <PrizeHeading type="Sponsors" />
            <hr className="hr"/>
            <SponsorUS />
            <SponsorsHead />

            {/* <PrizeHeading type="TITLE SPONSORS" className="subheading" id="timeline"/> */}
            {/* <img src={unstop} className="unstop-logo" alt="unstop" /> */}
            <h1 className="subheading">TITLE SPONSOR</h1>
            <hr className="hr"/>
            <a href="https://unstop.com/">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo-white.svg" className="unstop-logo" alt="unstop" />
            </a>
            
            <h1 className="subheading">STREAMING PARTNER</h1>
            <hr className="hr"/>
            {/* <img src="https://streamyard.com/static/img/0637d6d4f97338fe45dfb7a8e4d19753.svg" className="unstop-logo" alt="unstop" /> */}
            <a href="https://streamyard.com/">
              <img src={streamyard} className="streamyard-logo" alt="unstop" />
            </a>
          {sponsorLogos.map(SponsorGroup)}
          </Row>
        </div>

        {/* <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row> */}

        {/* ********Sponsors ending here ***** */}

        

        {/* ********Team here ***** */}
        {/* <section className="slant" id="team">
        <div className="slanted-div">         
          <h1 className="team" id="team">Team</h1>
          <hr  className="hr"/> */}
          {/* {FOOTER.JOIN_TEAM.required && <JoinTeam placeholder="Join our team" formLink={FOOTER.JOIN_TEAM} content="Work with us." />} */}
        {/* </div>
        <div>
          {TeamInfo.map(TeamMembers)}
          
        </div>
        </section> */}
        <Row className="teamsection" id="team">
          <PrizeHeading type="Team" />
           <hr className="hr"/>
          {TeamInfo.map(TeamMembers)}
        </Row>
       


        
        {/* ********Team ending here ***** */}

        {/* <Birds top="120vh" left="0vh" type="" /> */}

        {/* ********Judges here ***** */}
        {/* <section className="slant"  id="team">
         <div className="slanted-div">         
           <h1 className="team" id="judges">Judges</h1>
           <hr className="hr"/> */}
           {/* {FOOTER.JOIN_TEAM.required && <JoinTeam placeholder="Join our team" formLink={TOP_SECTION.JUDGES_FORM_LINK} content="Interested in being judge" />} */}
         {/* </div>
           {JudgesInfo.map(TeamMembers)}
         <div>
         </div>
        </section> */}

        <Row className="judgesection" id="judges">
          <PrizeHeading type="Judges" classNamehr />
           <hr className="hr"/>
          <div>
           {JudgesInfo.map(TeamMembers)}
          </div>  
        </Row>


        {/* ********Team ending here ***** */}


        {/* Organizers */}
         
        <Row className="organizersection" id="team">
          <PrizeHeading type="Organizers"/>
           <hr className="hr"/>
          <div>
          {organizers.map(TeamMembers)}
          </div>  
        </Row>
        {/* End organizers */}



         {/* ********Frequently asked Questions here ***** */}
         <div id="faq">
            <PrizeHeading type="Frequently Asked Questions" />
            <hr className="hr"/>
          <Row className="faqsection">
            <div className="Myfaqs">
              {frequentlyAskedQuestions.map(FrequentlyAsked)}
            </div>  
          </Row>
         </div>
        {/* ********Frequently asked Questions ending here ***** */}  
         
         {/* ********Contact form ***** */}
         <Row className="contactsection" id="contact">
          <PrizeHeading type="Contact Us" classNamehr />
           <hr className="hr"/>
          <div className="contact">
            <Contact/>
          </div>  
        </Row>
        {/* ******** ending here ***** */}  



      </Container>
      <Footer />
    </div>
  );
}
