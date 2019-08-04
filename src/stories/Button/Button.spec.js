import React from "react";
import { shallow } from "enzyme";
import Button from "../../components/Button";
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

describe("Button", () => {
  let wrapper;
  it("should render a default button", () => {
    wrapper = shallow(
      <Button type={options.TYPES["BUTTON"]}>Default Button</Button>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
  describe("Primary Button", () => {
    it("should render a Primary button", () => {
      wrapper = shallow(
        <Button
          type={options.TYPES["BUTTON"]}
          variance={options.VARIANCE["PRIMARY"]}
        >
          {" "}
          Primary Button{" "}
        </Button>
      );
      expect(wrapper.debug()).toMatchSnapshot();
    });
    
  });
});
