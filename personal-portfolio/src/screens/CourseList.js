import {Row, Col, Stack} from 'react-bootstrap'
import CourseCard from '../components/CourseCard';

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

        <CourseCard title="CMSC132: Object-Oriented Programming II" timeline="Fall 2023" location="University of Maryland"></CourseCard>

        <CourseCard title="MATH240: Introduction to Linear Algebra" timeline="Fall 2023" location="University of Maryland"></CourseCard>

        <CourseCard title="Harvard University: Using Python for Research" timeline="Sep 2023 - Oct 2023" location="edx.org"></CourseCard>

        <CourseCard title="Web Developer Bootcamp" timeline="Jun 2022 - Jan 2023" location="udemy.com"></CourseCard>

        <CourseCard title="React-The Complete Guide" timeline="Jun 2023 - July 2023" location="udemy.com"></CourseCard>

        

        <CourseCard title="Designing Deep Learning Systems: A Project-Based Intensive (Summer 2022)" timeline="Jun 2022 - Aug 2022"
            location="InspiritAI"></CourseCard>

        
        



       
        
        </>
    ); 

}