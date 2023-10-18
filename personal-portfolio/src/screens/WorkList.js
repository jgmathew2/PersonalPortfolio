import {Row, Col, Stack} from 'react-bootstrap'

import WorkCard from '../components/WorkCard';

export default function WorkList() {



    return (

        <>
        <Row className="align-content-center" align="center">
            <Col>

            <h1 style={{marginTop:"3.5vh", fontFamily:'Kreon', fontSize:"8vh", color:"black"}}>
                <b>Past Work Experience:</b> 
            </h1>
            
            </Col>

        </Row>

        <WorkCard title="Computer Science Teaching Assistant" timeline="Sep 2021 - Jun 2023" description="Computer Science TA, 
        first at a local computer science academy called KTByte in Lexington, MA; then for my high school's AP Computer
        Science class. Helped students complete their homework, and explain + teach concepts in object-oriented programming" ></WorkCard>

 



       
        
        </>
    ); 

}