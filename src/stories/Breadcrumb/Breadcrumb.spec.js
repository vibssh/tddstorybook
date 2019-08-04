import React from 'react';
import {shallow} from 'enzyme';

import Breadcrumb from '../../components/Breadcrumb';

const Items = {
  options: [
    {title: 'Home', url:'#home', isActive: true},
    {title: 'About', url:'#about', isActive: false}
  ],
  current: 'active'
}

describe('BreadCrumb', () => {
  let wrapper;
  describe('It should render Breadcrumb', () => {
    it('should not render anchor link if breadcrumb is active', () => {
      wrapper = shallow(<Breadcrumb {...Items}/>);
      expect(wrapper.debug()).toMatchSnapshot();
    })
  })
})