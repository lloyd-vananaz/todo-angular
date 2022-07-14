import { Meta, Story } from '@storybook/angular';

import { TodoListComponent } from './todo-list.component';

export default {
  title: 'Templates/Todo List',
  component: TodoListComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const TodoList = Template.bind({});
TodoList.args = {};
