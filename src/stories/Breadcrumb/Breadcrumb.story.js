import React from 'react';
import { storiesOf } from '@storybook/react';
import BreadCrumb from '../../components/Breadcrumb';

const Items = {
  options: [
    {title: 'Home', url:'#home', isActive: true},
    {title: 'About', url:'#about', isActive: false}
  ],
  current: 'active'
}

storiesOf('Breadcrumb', module)
.addWithJSX('Breadcrumb', () => (
  <BreadCrumb {...Items } />
))
