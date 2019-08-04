import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '../../components/Alert';

const type = {
  DEFAULT: '',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  LIGHT: 'light'
}

const iterator = () => {
  const Types = Object.keys(type);
  Types.map((T) => {
    return (
      storiesOf('Alert', module)
        .addWithJSX(`Alert ${type[T]}`, () => (
          <Alert type={type[T]}>A simple default alert—check it out!</Alert>
        )
      )
    )
  })
}

iterator();