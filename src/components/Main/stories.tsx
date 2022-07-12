import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main Storybook',
  component: Main,
  args: {
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu nisi sem. Vivamus quis elit.',
  },
  controls: { expanded: true },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
