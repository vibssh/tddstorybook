import React from 'react';
import {shallow} from 'enzyme';

import Badge from '../../components/Badge';

const Types = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  LIGHT: "light"
};

describe('Badge', () => {
  let wrapper;
  describe('should render default badge', () => {
    it('should have a default badge ', () => {
      wrapper = shallow(
      <Badge>Default Badge</Badge>
      )
      expect(wrapper.debug()).toMatchSnapshot()
    })
  })
  describe('should render primary badge', () => {
    it('should have a primary badge', () => {
      wrapper = shallow(
        <Badge type={Types['PRIMARY']}>Primary Badge</Badge>
      )
      expect(wrapper.debug()).toMatchSnapshot();
    })
  })
})