import {Row, Col, Stack} from 'react-bootstrap'

import InfoCard from '../components/InfoCard';

export default function CourseList() {



    return (

        <>
        <Row className="align-content-center" align="center">
            <Col>

            <h1 style={{marginTop:"3.5vh", fontFamily:'Kreon', fontSize:"8vh", color:"black"}}>
                <b>Past/Current Coursework:</b> 
            </h1>
            
            </Col>

        </Row>

        <InfoCard title="New Project" description="My new project guys"></InfoCard>

        <InfoCard title="New Project" description="My new project guys"></InfoCard>

        <InfoCard title="New Project" description="My new project guys"></InfoCard>

 



       
        
        </>
    ); 

}