import { connect } from 'react-redux';

import Gradient from 'src/components/Gradient';

const mapStateToProps = (state) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
  direction: state.direction,
});

const MapDisptachToProps = {};

export default connect(mapStateToProps, MapDisptachToProps)(Gradient);
