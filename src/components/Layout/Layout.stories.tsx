import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout, { ILayout } from '.';

export default {
  title: 'layouts/Layout',
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
);

export const Principal = Template.bind({});

Principal.args = {
  sampleTextProp: 'Hello world!',
} as ILayout;
