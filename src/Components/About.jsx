import aboutimage from '../images/stream.jpeg'
import { useState } from 'react';
const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <div>
            <p>We are providing the best training <br />under experts and champions. <br />We started our journey since 2024 <br />intenting a revolution in youths.</p>
      {!isExpanded && (
        <button onClick={handleToggle}>READ MORE</button>
      )}
      {isExpanded && (
        <div>
          <p>
           This is the generation where youths <br /> are engaged less in physical <br />activities and it is our aim <br />to make a healthy generation.
          </p>
          <button onClick={handleToggle}>READ LESS</button>
        </div>
      )}
    </div>
        </div>
    </div>
  )
}

export default About