import { ComponentStory, ComponentMeta } from '@storybook/react';
import mockLayoutProps from './Layout.mocks';
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
  ...mockLayoutProps.base,
} as ILayout;
