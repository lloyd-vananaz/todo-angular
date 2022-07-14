import { Meta, Story } from '@storybook/angular';

import { ProductListComponent } from './product-list.component';

export default {
  title: 'Templates/Product List',
  component: ProductListComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const ProductList = Template.bind({});
ProductList.args = {};
