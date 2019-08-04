import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../components/Button";

const Types = ["button", "anchor", "input"];
const Variance = [
  "default",
  "primary",
  "secondary",
  "danger",
  "success",
  "warning",
  "info",
  "light",
  "dark"
];

const iterator = () => {
  Types.map((type) => (
    Variance.map((v) => {
      const storyTitle = (type === 'button') ? '' : (type === 'button' && v === 'default') ? 'Default' : type.charAt(0).toUpperCase() + type.slice(1);
      return (
        storiesOf("Button", module)
        .addWithJSX(`${storyTitle} ${v !== 'default' ? v.charAt(0).toUpperCase() + v.slice(1) : ''} Button`, () => {
        return <Button type={type} variance={v}>{`${v.charAt(0).toUpperCase() + v.slice(1)} Button`}</Button>;
      })
    )
    })
  ))
}
iterator();
