import React from 'react'
import Image from 'react-bootstrap/Image';
import img4 from '../src/New folder/img4.jpg'
import img5 from '../src/New folder/img5.jfif'
import img6 from '../src/New folder/img6.jpg'
import img7 from '../src/New folder/img7.jpg'
import img8 from '../src/New folder/img8.jpg'
import img9 from '../src/New folder/img9.jfif'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Tour = () => {
  return (
    <div>
        <h2 className='he'>
        Tours
      </h2>
      <div className="h">
      <h4>
        Small glimpse of what we are offering , we are offering high quality trips at a very low price we will not concentarte on money we always concentrate on customers comfort and satsifaction....
      </h4>
      </div>
     <Container id='tour'>
      
      
      <Row>
        <Col md={6}>
        <Image src={img4}fluid  className='ig'/>
        <h2>Nature View</h2>
        </Col>
        <Col md={6}>
        <Image src={img5}fluid  className='ig'/>
        <h2> Nature Photography</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Image src={img6}fluid  className='ig'/>
        <h2>Hot air Baloon ride</h2>
        </Col>
        <Col md={6}>
        <Image src={img7}fluid  className='ig'/>
        <h2> Natural Scenary </h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Image src={img8}fluid  className='ig'/>
        <h2>Mountain Climbing</h2>
        </Col>
        <Col md={6}>
        <Image src={img9}fluid  className='ig'/>
        <h2> Trecking </h2>
        </Col>
      </Row>
     </Container>

    </div>
  )
}

export default Tour