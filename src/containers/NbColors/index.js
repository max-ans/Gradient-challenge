/* eslint-disable arrow-body-style */
// connect permet de créer l'assitant d'un composent
import { connect } from 'react-redux';

// === on importe le composant de présentation
import NbColors from 'src/components/NbColors';

// === mapStateToProps (lecture)
const mapStateToProps = (state) => {
  return {
    // nom de la props à remplir : élément à récuperer dans le state
    nbColors: state.nbColors,
  };
};
// === mapDispatchToProps (ecriture)
const mapDispatchToProps = {};

// === créaction de l'assistant
// connect retourne une fonction qui permet de créer un assistant
const createContainer = connect(mapStateToProps, mapDispatchToProps);

// j'applique cette fonction sur le composant de présentation
// pour créer l'assistant
const containerComponent = createContainer(NbColors);

export default containerComponent;

// sans variables intermédiare :
// export default connect(mapStateToProps, mapDispatchToProps)(NbColors);

// créer un assistant pour le composent NbColors, qui va gérer la
// communication avec le store et fournir les informations nécessaire à NbColors

// ce que fait l'assistant ( qui est lui-même un composant React ), ça
// va être l'équivalent de :
// const value = state.nbColors
// return (
//  <NbColors nbColors={value} />
// )
