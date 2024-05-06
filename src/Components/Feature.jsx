import FeatureBox from "./FeatureBox"
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

const Feature = () => {
  return (
    <div id="features">
        <h1>FEATURES</h1>
        <div className="a-container">
            <FeatureBox image={fimage1} title="WeightLifting" caption="Maintaining flexibility and balance, remain independent as you age."/>
            <FeatureBox image={fimage2} title="Specific Muscle" caption=" Exercises that target certain muscles: Upper, Lower, Middle."/>
            <FeatureBox image={fimage3} title="Flex Your Muscle" caption=" Show off one's strength or power,demonstrate their size and strength. " />
            <FeatureBox image={fimage4} title="Cardio Exercise"  caption="Get at the gym using the treadmill, elliptical or stair climber."/>

        </div>
        </div>
  )
}

export default Feature