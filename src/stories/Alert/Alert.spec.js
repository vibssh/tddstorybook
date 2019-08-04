import React from "react";
import { shallow } from "enzyme";

import Alert from "../../components/Alert";

const Types = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  LIGHT: "light"
};

describe("Alert", () => {
  let wrapper;
  it("Should render Default Alert", () => {
    wrapper = shallow(<Alert>It should render Default Alert</Alert>);
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it("Should render Primary Alert", () => {
    wrapper = shallow(<Alert type={Types['PRIMARY']}>It should render Primary Alert</Alert>);
    expect(wrapper.debug()).toMatchSnapshot();
  })
});
