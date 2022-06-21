import pageHeader from "../components/pageHeader.vue";

export default {
	title: "Page Header",
	component: pageHeader,
	parameters: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { pageHeader },
  template:
  	'<pageHeader :name=name v-bind="$props"/>',
});

export const Main = Template.bind({});
Main.args = {
	label: 'Main Header',
};