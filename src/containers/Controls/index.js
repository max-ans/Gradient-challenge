import { connect } from 'react-redux';
import Controls from 'src/components/Controls';
import { randomFirstColor, randomLastColor } from 'src/actions';
import { randomHexColor } from 'src/utils';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  // nom de la props à remplir : ici ce sera une fonction
  // qui dispatch l'action
  randomColorFirst: () => {
    dispatch(randomFirstColor(randomHexColor()));
  },
  randomColorLast: () => {
    dispatch(randomLastColor(randomHexColor()));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
