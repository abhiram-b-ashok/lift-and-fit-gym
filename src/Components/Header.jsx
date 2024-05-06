import video from '../images/vmake.mp4'
const Header = () => {
  return (
    <div id='main'>
         <video className="video-background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
        <div className="name">
            <h2 className='nameh2'>STEP UP YOUR</h2>
            <h1 className='nameh1'><span className='namespan'>FITNESS</span> WITH US</h1>
            <p className="namedetails">Build Your Body And Fitness With Professional Touch</p>
            <div className="header-btns">
                <a href="https://www.instagram.com/_lift_and_fit_?igsh=bXAzOGw2cWEycG1p" className="header-btn">JOIN US</a>
            </div>
        </div>
    </div>
  )
}

export default Header