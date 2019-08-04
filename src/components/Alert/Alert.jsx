import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

const defaultPropTypes = {
  children: null,
  type: ''
}

const Alert = (props) => {
  const {type, children} = props;
  const modifier = type === undefined ? '' : type;
  return (
    <div className={`alert ${modifier}`} role="alert">
      {children}
    </div>
  )
}
Alert.propTypes = propTypes;
Alert.defaultPropTypes = defaultPropTypes;

export default Alert;