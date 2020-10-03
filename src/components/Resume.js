import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
`; 

export const Resume = (props) => ( 
  <GridWrapper>
              <h1>
                <span>Resume</span>
              </h1>
            
       
                  <h3>GPS Trackit</h3>
                  <p className="info">
                    Software Developer <span>•</span>{" "}
                    <em className="date">December 2019 - April 2020 - COVID-19 HeadCount Reduction</em>
                  </p>
                 <p>&bull; Responsible for developing GPS Trackit product line in React, Redux and Saga using VSCODE and Chrome DEV Tools.<br /> &bull; 
                  Proficient in JavaScript / ES6/7/8/9 standards / front-end development.<br /> &bull; Worked with RESTful API integration with GPS Trackit product line.<br /> &bull; 
                  Developed the first TDD automation framework from the ground up at GPS Trackit using Page Object and Page Factory design pattern, utilizing Java, Maven, IntelliJ and AWS.<br /> &bull; 
                  Created BDD Rest-Assured API calls in the automation framework to validate API calls utilized in Postman.<br /> &bull; 
                  Utilized Postman API tool sets to perform API commands such as GET, PUT, POST and DELETE. </p> 
                
         
              {/* item end */}
         
                  <h3>Deluxe Corporation</h3>
                  <p className="info">
                    Automation Engineer <span>•</span>{" "}
                    <em className="date">April 2018 - November 2019</em>
                  </p>
                  <p>&bull; Architected and designed Page Object and Factory Design Pattern(s) for existing automation framework in the current product line of R360 for DELUXE banking product lines in Java/C# and Python Robot frameworks. <br /> &bull; 
                      Mentored fellow team members on design patterns and coding standards in Page Object Model. <br /> &bull; 
                      Performed both API and UI automation on Business Mobile utilizing Python Robot and Java. <br />&bull; 
                      Implementing Fluent and Dependency Injection design patterns in current automation frameworks for both iOS and Android applications in C#. <br />&bull; 
                      Mentored junior team members in TDD (Red, Green, Refactor) methodology/best practices. <br /> &bull; 
                      Implemented TDD and BDD in both R360 and Business Mobile projects. <br /> &bull; 
                      Created test cases for Smoke, Critical and Regression in Business Mobile.</p>
            
              {/* item end */}
           
            {/* main-col end */}
     
      
                  <h3>Celtic Testing Experts</h3>
                  <p className="info">
                    Senior Automation Test Engineer <span>•</span>{" "}
                    <em className="date">March 2017 - December 2017</em>
                  </p>
                  <p>  &bull; Responsible for automating E-commerce main line and mobile for Aarons department store. <br />  &bull; 
                      Experience working in 2-week Agile/Scrum environment.  <br /> &bull; 
                      Responsible for refactoring the complete E-commerce main line utilizing Ranorex Studio and C# modules. <br />  &bull; 
                      Developed multiple TDD projects for new CTE clients in Java and Selenium. <br /> &bull; 
                      Integrated automated testing into CI/CD pipeline in E-commerce. <br /> &bull; 
                      Developed test automation for APIs, Windows, Web, and Mobile Applications. <br />  &bull; 
                      Architected and designed open source, Ranorex and ZapTest strategies for Celtic Testing Experts, utilizing design patterns and best practices.</p>
    
              {/* item end */}

     

        
                  <h3>BottomLine Technologies</h3>
                  <p className="info">
                    Senior  Test Automation Engineer <span>•</span>{" "}
                    <em className="date">July 2015 - August 2016</em>
                  </p>
                  <p>&bull;Senior Test Automation Engineer for all Bottomline Healthcare product lines. <br />  &bull;
                      Architected the first Java Selenium WebDriver Test Driven Development (TDD) automation framework, utilizing design patterns, best practices. <br />  &bull;
                      Took part in design, peer reviews of design with senior management and implementation of the design. <br />  &bull;
                      Designed and developed the first Java Selenium WebDriver Test Driven Development (TDD) automation framework. <br />  &bull;
                      Developed Appium test cases in Java Selenium that automated IPAD/IPHONE mobile healthcare applications. <br />  &bull;
                      Developed Windows automation using Java Selenium to automate the .NET Windows LogicalInk Designer application in C#. <br />  &bull;
                      Developed automation scripts with JMeter for scalability testing of the REST API interface within Logical Ink Web. <br />  &bull;
                      Jenkins hands-on experience with configuring, running and debugging nightly automation builds. <br /> &bull;
                      Responsible for keeping management informed of testing project status, raising issues/risks as necessary. <br />  &bull;
                      Created text cases in Jira and ensured complete traceability with the automation framework. <br /> &bull;
                      Created/tracked and retested software defects in Jira defect tracking tool.<br /> </p>
            
              {/* item end */}


                  <h3>PeopleNet </h3>
                  <p className="info">
                  Automation Engineer <span>•</span>{" "}
                    <em className="date">June 2014 - July 2015</em>
                  </p>
                  <p>&bull;Lead Java Automation Engineer for all PeopleNet product lines. <br /> &bull;
                      Architected and designed the first Java Selenium automation framework in PeopleNet <br /> &bull;
                      Developed the first innovative automation framework for PeopleNet Time entry using Java Selenium WebDriver, JDBC, SQL, Microsoft SQL Server 2014, TestNG and Junit. <br /> &bull;
                      Developed the first Java automation framework for IPAD/Microsoft utilizing selenium framework Created features in Cucumber-Gherkin initial setup for automation framework. <br /> &bull;
                      Defined scenarios with given, when and then statements. <br /> &bull;
                      Converted initial logging in for PeopleNet timecard entry using Selenium WebDriver. <br /> &bull;
                      Demonstrated the complete automation framework to the owner of PeopleNet and upper management. <br /> &bull;
                      SQL/Data query expertise for development of the automation framework using Microsoft SQL Server 2014 Created SQL queries to retrieve transactions for multiple tables within the PeopleNet time entry database. <br /> &bull;
                      These queries were utilized within JDBC within the time entry selenium WebDriver automation framework. <br /> &bull;
                      Performance and stress testing using the current automation framework.</p>
             
              {/* item end */}

             
                  <h3>GE</h3>
                  <p className="info">
                    Lead Engineer/Technologist <span>•</span>{" "}
                    <em className="date">December 2009 - June 2014</em>
                  </p>
                  <p>&bull;Lead System Test Engineer for all AMI meter products in both IEC and ANSI meter products. <br /> &bull;
                      Responsible for managing and mentoring other employees within Digital meters. <br /> &bull;
                      Generating schedules and meeting on-time schedules. <br /> &bull;
                      Developed Java framework utilizing Selenium/WebDriver for the OnRamp Wireless 3 rd party IP based backhaul. <br /> &bull;
                      Utilized Firebug to identify the elements. <br /> &bull;
                      Developed and executed software test plans, test designs, test objectives, and test cases.<br /> &bull;
                      Developed traceability between test cases and test requirements using HP Quality Center. <br /> &bull;
                      Developed automated test cases with HP QTP. <br /> &bull;
                      Recorded automated playback test cases for internet explorer on the vendor IP based backhauls such as Gridnet, OnRamp Wireless and SilverSprings. <br /> &bull;
                      Created log in test cases using QTP. <br /> &bull;
                      Performed automated remote reads of smart meters. <br /> &bull;
                      Recorded all defects in version controlled defect tracking tool within GE. <br /> &bull;
                      Debug and root cause analysis within the meter and tools that utilize the meter locally through the optical port and remotely through the IP based backhaul. <br /> &bull;
                      Over 1000 hours of Touch Time Savings utilizing Selenium, DLMS explorer, HP Quality Center, GE source controlled software and PERL scripting. <br /> &bull;
                      Hands on experience with ANSI standards, including C12.18, C12.19, C12.21 and C12.22. <br /> &bull;
                      Active member of Robotics within GE. <br /> &bull;
                      Advocate for United Way. <br /> &bull;
                      Created System Test Webpage that has been utilized by multiple team members within the US, the UK and India in GE Digital Meters <br /> &bull;
                      Technical Lead and co-author of the Smart Meter Security Design Practice with the Chief Engineer of Digital Meters.</p>
            
              {/* item end */}

                
        
          {/* End Work */}
          {/* Skills
    ----------------------------------------------- */}
         
              <h1>
                <span>Skills</span>
              </h1>
          
            <p></p>
            <div className="nine columns main-col">
            <p><strong>LANGUAGES</strong>: Java, JDBC, C#, Selenium, Ruby on Rails, Cucumber, HTML, HTML 5, CSS, JavaScript,<br />Embedded C, React, Redux, Knockout, SQL, NodeJS and Android development</p>
            <p><strong>TOOLS</strong>: TestNG, JUnit, NUnit, Appium, Robot, Firebug, Jira, Postman, Confluence, Chrome Developer Tools, SmartBear SOAP UI and JMeter </p>  
            <p><strong>SERVERS</strong>: Ubuntu 16.04 LTS, Jenkins, Apache, LAMP, Windows SQL Server 2012/14, MySQL, AWS, Microsoft Azure and Windows server 2012/2008  </p>  
            <p><strong>OS</strong>: Windows 10/08/07, Ubuntu 16.04/15.10 and Pop 17.10  </p>  
            <p><strong>IDES</strong>: Eclipse, IntelliJ, XCODE, VSCODE, Android Studio, Ranorex Studio.7/6, Ranorex Studio, Microsoft Visual and Xamarin studio </p>
            <p><strong>SOURCE CONTROL</strong>: GIT, SVN, Stash, Bitbucket, SourceTree and SmartGit </p>

              <div className="bars">
                <ul className="skills">
                  
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
       
          {/* End skills */}
      
        {/* Resume Section End*/}
        </GridWrapper>
    );
  

export default Resume;


