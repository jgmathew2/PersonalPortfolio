import {Row, Col} from 'react-bootstrap'; 

export default function WorkCard({title, timeline, description}) {

    return (

        <Row className="justify-content-center">
            <Col lg = {{span: 10, offset: 2}} style={{margin:"2vh"}}>

                <div style={{width:"100%", fontFamily:"JetBrainsMono", background:"#D9D9D9", padding:"0.5vh"}}>
                    
                    
                    <p style={{fontSize:"2.5vmax", marginLeft:"1.5vh", marginTop:"1vh"}}>{title}:</p>

                    
                    <div style={{width:"100%", background:"black", height:"0.25vh", marginTop:"-1.5vh"}}> </div>

                    <p style={{margin: "2vh", fontSize:"1.5vmax"}}>{"Timeline: " + timeline}</p>

                    <p style={{margin: "2vh", fontSize:"1.5vmax"}}>{"Description: " + description}</p> 

                </div>

            </Col>

        </Row>

    ); 

}
