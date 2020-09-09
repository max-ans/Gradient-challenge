import { connect } from 'react-redux';
import Directions from 'src/components/Directions';
import { changeGradientAngle } from 'src/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  changeDirection: (directions) => {
    dispatch(changeGradientAngle(directions));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
