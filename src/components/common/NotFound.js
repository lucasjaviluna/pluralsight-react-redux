import React, {PropTypes} from 'react';
import {notFound} from '../../actions/notFoundAction';

class NotFound extends React.Component {
  componentWillMount() {
    const { store } = this.context;
    store.dispatch(notFound());
  }

  render() {
    return (
      <div>
        <p>Ooops! Parece que lo que estás buscando no existe!</p>
        <img src="https://s-media-cache-ak0.pinimg.com/736x/cf/5d/9d/cf5d9d49a89503c88625eba09423bb1a.jpg" alt="L"/>
      </div>
    );
  }
}

NotFound.contextTypes = {
  store: PropTypes.object
};

export default NotFound;
