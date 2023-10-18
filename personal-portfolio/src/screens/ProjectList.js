import {Row, Col, Stack} from 'react-bootstrap'

import ProjectCard from '../components/ProjectCard';

export default function ProjectList() {



    return (

        <>
        <Row className="align-content-center" align="center">

            <Col>

            <h1 style={{marginTop:"3.5vh", fontFamily:'Kreon', fontSize:"8vh", color:"black"}}>
                <b>Past Projects:</b> 
            </h1>
            
            </Col>

        </Row>

        <ProjectCard title="PlanetCode" timeline="Jul 2023 - Aug 2023" description="Re-made grandfather's astrology website.
         Takes in user info, displays astrological information. Used React + React Bootstrap to make front
          end, Springboot to make back end. To host backend, used AWS Lambda + SAM(Serverless Application Model) with DynamoDB
           for data storage. Used an AWS S3 Bucket to host front-end." skills="Bootstrap (Framework) · React.js · Spring Boot ·
            Amazon Dynamodb · Amazon Web Services (AWS)"
           url="https://astroplanetcode.com">

        </ProjectCard>

        <ProjectCard title="FlimFlix" timeline="Sep 2023 - Sep 2023" description="Worked in a group to make a social media website for movies. Designed a social media movie website. 
        Save reviews, see feed of other friends’ reviews and watchlist. Uses Auth0 for user authentication,
         has account system based on email. Can add friends, search for movies via an API, and add reviews. 
        Used React with Typescript and Bootstrap for the front-end, and Express.js integrated with MariaDB(sql) 
        for the back-end. Won the best new hacker award at the hackathon,
         UMBC Hacks." skills="React.js · TypeScript · Bootstrap (Framework) · Git" url="https://filmflixpro.netlify.app/"></ProjectCard>

        <ProjectCard title="Calendar Task Manager" timeline="May 2023 - Jun 2023" description="Made a personal calendar/task manager for myself. Takes user input for new task/event, 
        adds notification to calendar and task-bars, saves data to database. Front-end made with React.js. Back-end made with Node.js, Express.js, Mongoose(an Object Data Mapper), 
        and MongoDB." skills="Mongoose ODM · MongoDB · React.js · Express.js · Node.js">

        </ProjectCard>

        <ProjectCard title="Android App Crime Reporter" timeline="Jun 2022 - Aug 2022" description="Made an Android App which takes in UI input 
        to report crime/event and save to database. Also displays all reported crimes/events on map using Google Maps API. Front-end made with 
        Android Studio, back-end made with Springboot and Postgres." skills="Java · Android Studio · Spring Boot · Hibernate · PostgreSQL">
        

        </ProjectCard>

        


       
        
        </>
    ); 

}