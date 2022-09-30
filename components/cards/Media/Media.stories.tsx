import { ComponentMeta, ComponentStory } from '@storybook/react';
import Media, { IMedia } from './Media';
import { mockMediaProps } from './Media.mocks';

export default {
  title: 'components/media',
  component: Media,
  argTypes: {},
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => <Media {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...mockMediaProps.base,
} as IMedia;
