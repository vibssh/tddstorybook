import React from "react";
import { storiesOf } from "@storybook/react";

import Badge from "../../components/Badge";

const type = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  LIGHT: "light",
  DARK: "dark"
};

const iterator = () => {
  const Types = Object.keys(type);
  Types.map(T =>
    storiesOf("Badge", module).addWithJSX(`Badge ${type[T]}`, () => (
      <Badge type={type[T]}>{`${type[T]}`}</Badge>
    ))
  );
};

iterator();
