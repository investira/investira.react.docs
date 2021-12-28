import { Button } from "investira.react.components";
import { basicColors } from "./options";

const optionsSize = ["small", "medium", "large"];

const optionsVariant = ["contained", "outlined", "text"];

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: optionsVariant,
      control: { type: "radio" },
    },
    size: {
      options: optionsSize,
      control: { type: "radio" },
    },
    color: {
      options: basicColors,
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: "Teste",
  fullWidth: false,
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
};
