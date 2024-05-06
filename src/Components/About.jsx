import aboutimage from '../images/stream.jpeg'

const About = () => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>We are providing the best</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About