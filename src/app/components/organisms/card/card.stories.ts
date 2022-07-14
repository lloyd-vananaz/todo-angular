import { Meta, Story } from '@storybook/angular';

import { CardComponent } from './card.component';

export default {
  title: 'Organisms/Card',
  component: CardComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Card = Template.bind({});
Card.args = {
  title: 'Todo Sample',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
