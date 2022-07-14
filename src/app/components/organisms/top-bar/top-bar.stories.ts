import { Meta, Story } from '@storybook/angular';

import { TopBarComponent } from './top-bar.component';

export default {
  title: 'Organisms/Top Bar',
  component: TopBarComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const TopBar = Template.bind({});
TopBar.args = {};
