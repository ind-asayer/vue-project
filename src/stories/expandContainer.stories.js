import expandContainer from "../components/expandContainer.vue";

export default {
  title: "Expanding Container",
  component: expandContainer,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { expandContainer },
  template:
  	'<expandContainer :label="label" v-bind="$props"/>',
});

export const Main = Template.bind({});
Main.args = {
	label: 'Subheader',
};