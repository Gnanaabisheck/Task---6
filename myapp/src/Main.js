import React from 'react'
import Image from 'react-bootstrap/Image';
import img from '../src/New folder/img.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Main = () => {
  return (
    <div id='about'>

     <Container fluid>

     <Row>
            <Col md={6}>

                <h1>
                    About us 
                </h1>

                <p>
                Travel provides a fantastic opportunity for you to learn many new things. Yes, you gain knowledge from travel guides, and you may be able to visualize what you are reading about but nothing compares to actually feeling the sun on your face or the snow in your hair. When you experience standing on the soil, looking at the things of those you read about, the experience is exhilarating and irreplaceable.Many travelers stand in awe of what they are surrounded by, drinking in every experience as if it were a glass of wine aged to perfection. While traveling, you do not just learn about new places, you also learn to relate with people living in different parts of the world that may look and live very much differently from you. When visiting your travel destination, you learn about the diversity in geography as well as the global culture. Listening new languages, eating various types of cuisine is also learning in itself.
                </p>
            
            </Col>
            <Col md={6}>
            <Image src={img}fluid  className='img'/>
            </Col>
        </Row>
    


     </Container>
        
    </div>
  )
}

export default Main