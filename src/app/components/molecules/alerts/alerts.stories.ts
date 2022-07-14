import { Meta, Story } from '@storybook/angular';

import { AlertsComponent } from './alerts.component';

import { products } from 'src/app/mockdata/products';

export default {
  title: 'Molecules/Alerts',
  component: AlertsComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Alerts = Template.bind({});
Alerts.args = {
  item: products[0],
};
