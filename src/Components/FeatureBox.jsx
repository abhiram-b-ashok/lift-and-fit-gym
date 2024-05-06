import PropTypes from 'prop-types';

const FeatureBox = (props) => {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt="" />
        </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            <p>{props.caption}</p>
        </div>
    </div>
  )
}

FeatureBox.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption:PropTypes.string.isRequired
};

export default FeatureBox;
