import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
}

const defaultPropTypes = {
  children: null,
  type: 'default'
}

const Badge = (props) => {
  const {children, type} = props;
  const modifier = type === undefined ? '' : type;
  return (
    <div className={`badge ${modifier}`}>{children}</div>
  )
}

Badge.propTypes = propTypes;
Badge.defaultPropTypes = defaultPropTypes;

export default Badge;