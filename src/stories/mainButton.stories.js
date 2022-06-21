import { action } from "@storybook/addon-actions";
//import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import mainButton from "../components/mainButton.vue";

export default {
  title: "mainButton",
  component: mainButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Button = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { mainButton },
  template: '<mainButton :name="name" :isLoading="isLoading" @buttonClicked="action" v-bind="$props" />',
  methods: {
    action: action("button-clicked"),
  },
});

export const Primary = Button.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  name:"Primary Button",
  primary: true,
  label: 'mainButton',
};

export const Secondary = Button.bind({});
Secondary.args = {
  name:"Secondary Button",
  primary:false,
  label: 'mainButton',
};
