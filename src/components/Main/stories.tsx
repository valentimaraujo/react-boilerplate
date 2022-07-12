import Main from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

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
