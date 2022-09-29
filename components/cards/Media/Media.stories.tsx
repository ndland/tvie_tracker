import { ComponentMeta, ComponentStory } from '@storybook/react';
import Media, { IMedia } from './Media';
import { mockMediaProps } from './Media.mocks';

export default {
  title: 'cards/media',
  component: Media,
  argTypes: {},
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => <Media {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockMediaProps.base,
} as IMedia;
