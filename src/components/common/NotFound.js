import React from 'react';

class NotFound extends React.Component {
  constructor() {
    super();
    console.log('NOTFOUND');
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

export default NotFound;
