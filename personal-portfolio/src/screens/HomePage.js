import {Container, Row, Col, Image, Button, Stack} from 'react-bootstrap'; 
import mypic from "../res/mypic.jpg"; 
import {AiFillGithub} from "react-icons/ai"
import {FaGithubSquare} from "react-icons/fa"
import {FiDownload} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const navigate = useNavigate(); 



    return (

        <>

        <Row style={{height:"1.5vw"}}>


        </Row>
        <Row className="align-content-center" align="center">
            <Col  xs lg = {{span: 6, offset: 3}} align="center" style={{height:"6vw"}}>
                <div style={{background: "#D9D9D9", width:"100%", height:"100%",
                    fontSize: "2.5vw", fontFamily: "JetBrainsMono", paddingTop: "1vw", borderRadius:"1vw"}}>

                    <p>
                    HI! MY NAME IS JOHAN MATHEW!
                    </p>
                    

                </div>

            </Col>
        </Row>

        <Row>
            <Col xs={12} lg = {{span:7}}>

                <Image src = {mypic} style={{width: "56vw", margin: "2vh", borderRadius:"1vh"}}>

                </Image>
            </Col>

            <Col xs lg = {{span:5}}>

                <Container fluid>
                    <Row>
                        <Col >

                        <p style={{fontSize:"3vw", color:"white", marginTop:"3.5vh", fontFamily:'Kreon' }}>
                        I’m a student at the University of Maryland College-Park, and a full-stack developer. 
                        </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs lg = {6}>
                            <Button href="https://drive.google.com/file/d/1JCAW3Ot9lSl9jucsjR7dMr2n0chjAg2w/view?usp=sharing" target="_blank"
                            style={{width:"100%", height: "8vh", color:"black", fontSize:"3vw", 
                                background:"#D9D9D9", fontFamily: "JetBrainsMono", marginTop:"2vh", borderRadius:"1vw"}}>

                                <Stack direction="horizontal" gap={3} style={{paddingLeft:"1vw"}}>
                                <p style={{marginTop:"-0.75vh"}}>Resume </p>

                                <FiDownload style={{marginTop:"-2vh"}}></FiDownload>

                                </Stack>
                                
                            </Button>
                        </Col>

                        <Col xs lg = {{span: 1, offset: 1}}>

                            <Button className="bg-transparent" style={{border:"0px"}} href="https://github.com/jgmathew2" target="_blank">
                                <FaGithubSquare size="5.5vw" color="#D9D9D9" style={{marginTop:"0.25vh", marginLeft:"-1.75vw"}}/>
                            </Button>
                        </Col>

                        <Col xs lg = {{span: 1, offset: 1}}>
                            <Button className="bg-transparent" style={{border:"0px"}} href="https://www.linkedin.com/in/johan-mathew-6b062427a/" target="_blank">
                                <AiFillLinkedin size="6vw" color="#D9D9D9" style={{marginTop:"-0.25vh"}}/>
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs lg = {11}>

                            <Stack gap={4}>
                            <Button style={{width:"100%", height: "8vh", color:"black", fontSize:"3vw", 
                                background:"#D9D9D9", fontFamily: "JetBrainsMono", marginTop:"2vh", borderRadius:"1vw"}}
                                onClick={()=>{navigate("/projectlist")}}>

                                <p style={{marginTop:"-0.75vh"}}>Projects </p>

                                
                            </Button>

                            <Button style={{width:"100%", height: "8vh", color:"black", fontSize:"3vw", 
                                background:"#D9D9D9", fontFamily: "JetBrainsMono", marginTop:"2vh", borderRadius:"1vw"}}
                                onClick={()=>{navigate("/worklist")}}>

                                <p style={{marginTop:"-0.75vh"}}>Work Experience </p>

                                
                            </Button>

                            <Button style={{width:"100%", height: "8vh", color:"black", fontSize:"3vw", 
                                background:"#D9D9D9", fontFamily: "JetBrainsMono", marginTop:"2vh", borderRadius:"1vw"}}
                                onClick={()=>{navigate("/courselist")}}>

                                <p style={{marginTop:"-0.75vh"}}>Coursework </p>

                                
                            </Button>

                            </Stack>

                        </Col>
                    </Row>
                </Container>

            </Col>
        </Row>

        

        

        </>
    )
}