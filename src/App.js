import './style.css';
import{Navbar, Nav, Container, Carousel, Form, Button} from 'react-bootstrap'
import './App.css';
import img1 from './images/team.png';
import VideoPlayer from "react-video-js-player";
import design from './videos/Architecture.mp4';

function App() {
  return (
  <div className="App">
      <h1>Challenge ReactJS</h1>
        <br/>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ArchiDesign</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <br />
      <Carousel>
  <Carousel.Item>
    <img
      className="slide"
      src="https://images.unsplash.com/photo-1605956093065-da539902deb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src="https://images.unsplash.com/photo-1639829575276-74a9fb6c807b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src="https://images.unsplash.com/photo-1639409393473-e5b56db65481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/>
<div className="contact">
    <h3>Please get in touch and our expert support <br/>

      team will answer all your question</h3>
      <br/>
      <img src="./images/contactus.jpg" className="img" alt='contactImage' />
      <br/>
      <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br/>

<div className="work">
<h3>Check out our Latest Work</h3>
<br/>
<VideoPlayer src={design} className="video"/>
</div>

<br/>

<div className="team">
  <h4>Meet our brilliant support team</h4>
  <br/>
  <img src={img1} className="teamimg" alt='teamImage' />

</div>
<br/>



</div>
<footer>
  <div className="footer"> © 2022.By-Mina.</div>
</footer> 
          
</div>
  );
}

export default App;
