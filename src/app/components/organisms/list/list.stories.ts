import { Meta, Story } from '@storybook/angular';

import { ListComponent } from './list.component';

import { products } from 'src/app/mockdata/products';

export default {
  title: 'Organisms/List',
  component: ListComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const List = Template.bind({});
List.args = {
  items: products,
};
