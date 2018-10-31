import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends Component {
  render() {
    return (
      <div>
        This is an very basic Boilerplate with {this.props.library} created by A. Kovalev (a.k. postal286) based on CRA.
        Enjoy your coding!
      </div>
    );
  }
}

BaseComponent.propTypes = {
  library: PropTypes.string.isRequired
};

export default BaseComponent;