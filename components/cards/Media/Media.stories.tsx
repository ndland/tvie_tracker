import { ComponentMeta, ComponentStory } from '@storybook/react';
import MediaCard, { IMedia } from './Media';
import { mockMediaProps } from './Media.mocks';

export default {
  title: 'cards/media',
  component: MediaCard,
  argTypes: {},
} as ComponentMeta<typeof MediaCard>;

const Template: ComponentStory<typeof MediaCard> = (args) => (
  <MediaCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMediaProps.base,
} as IMedia;
