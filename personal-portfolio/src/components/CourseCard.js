import {Row, Col, Button, Stack} from 'react-bootstrap'; 

import { AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';

import { useState } from 'react';

export default function CourseCard({title, location, timeline}) {

    let [visible, showDescription] = useState(false); 

    return (

        <Row className="justify-content-center">
            <Col lg = {{span: 10, offset: 2}} style={{margin:"2vh"}}>

                <div style={{width:"100%", fontFamily:"JetBrainsMono", background:"#D9D9D9", padding:"0.5vh"}}>
                    
                    
                <Stack direction="horizontal" onClick={() => {showDescription(!visible)}}>

                    <p style={{fontSize:"2vmax", marginLeft:"1.5vh", marginTop:"1vh",  width:"50vw", overflow:"hidden"}}>
                        {title}:
                    </p>

                    <Button style={{background:"transparent", border: "0px", marginLeft:"25vw", marginTop:"-1vh"}
                        }>
                    
                    { visible
                            ? <AiOutlineArrowUp color="black" size="5vh"/> 
                            : <AiOutlineArrowDown color="black" size="5vh"/>  
                    }

                    </Button>

                    </Stack>

                    <div hidden={!visible}>


                    <div style={{width:"100%", background:"black", height:"0.25vh", marginTop:"-1.5vh"}}> </div>

                    <p style={{margin: "2vh", fontSize:"1.5vmax"}}>{"Timeline: " + timeline}</p>

                    <p style={{margin: "2vh", fontSize:"1.5vmax"}}>{"Location: " + location}</p>

                    </div>

                </div>

            </Col>

        </Row>

    ); 

}
