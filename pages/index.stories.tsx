import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from '.';

export default {
  title: 'Pages/Index',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});

Default.args = {};
