import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const thumbsUp = canvas.getByLabelText(/thumbs up/i);
  const thumbsDown = canvas.getByLabelText(/thumbs down/i);

  await userEvent.click(thumbsUp);
  await expect(thumbsUp).toHaveClass('fill-green-400 stroke-green-400');

  await userEvent.click(thumbsDown);
  await expect(thumbsDown).toHaveClass('fill-red-400 stroke-red-400');
};

export const EmptyResponse = Template.bind({});

EmptyResponse.args = {
  ...mockMediaProps.empty,
} as IMedia;
