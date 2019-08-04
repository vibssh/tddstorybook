import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const propTypes = {
  type: PropTypes.string.isRequired,
  variance: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  btnValue: PropTypes.string
};

const defaultPropTypes = {
  variance: "default",
  size: "normal",
  state: "",
  btnValue: ""
};

const options = {
  TYPES: {
    BUTTON: "button",
    ANCHOR: "anchor",
    INPUT: "input"
  },

  VARIANCE: {
    DEFAULT: "default",
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
    LIGHT: "light",
    DARK: "dark"
  },

  SIZES: {
    LARGE: "large",
    SMALL: "small",
    NORMAL: "normal",
    BLOCK: "block"
  },

  STATES: {
    ACTIVE: "active",
    DISABLED: "disabled"
  }
};

const Button = props => {
  const { type, variance, size, state, btnValue, children } = props;
  return (
    <React.Fragment>
      {(() => {
        switch (type) {
          case options.TYPES.BUTTON:
            return (
              <button
                type="button"
                className={`btn ${variance ? variance: ''} ${state ? state: ''} ${size ? size: ''}`}
              >
                {children}
              </button>
            );
          case options.TYPES.ANCHOR:
            return (
              <a
                href="/#"
                className={`btn ${variance ? variance: ''} ${state ? state: ''} ${size ? size: ''}`}
                role="button"
              >
                {children}
              </a>
            );
          case options.TYPES.INPUT:
            return (
              <input
                type="submit"
                className={`btn ${variance ? variance: ''} ${state ? state: ''} ${size ? size: ''}`}
                value={btnValue}
              />
            );
            default: return <h1>No Button Type Declared</h1> 
        }
      })()}
    </React.Fragment>
  );
};

Button.propTypes = propTypes;
Button.defaultPropTypes = defaultPropTypes;

export default Button;
