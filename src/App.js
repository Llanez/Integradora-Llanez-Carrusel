import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
function App() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/51.png'}
        alt="First slide"
        style={{height: window.screen.height}}
      />
      <Carousel.Caption>
        <h3>1</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/52.png'}
        alt="Second slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>2</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/53.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>3</h3>
      
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/101.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>4</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/102.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>5</h3>
   
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/103.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>6</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/151.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>7</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/152.png'}
        alt="Third slide"
  
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>8</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/153.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>9</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/201.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>10</h3>
     
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/202.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>11</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={process.env.PUBLIC_URL + '/imgs/203.png'}
        alt="Third slide"
        style={{height: window.screen.height}}
      />
  
      <Carousel.Caption>
        <h3>12</h3>
   
      </Carousel.Caption>
    </Carousel.Item>
  
  
  </Carousel>
  );
}

export default App;
