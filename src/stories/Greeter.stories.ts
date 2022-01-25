// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import GreeterComponent from './greeter.component';


export default {
  title: 'Example/Header',
  component: GreeterComponent,
} as Meta;

const Template: Story<GreeterComponent> = (args: GreeterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  who: 'Dude!'
};