// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from 'src/app/parts/checkbox/checkbox.component';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, MatCheckboxModule],
    }),
  ],
} as Meta;

const Template: Story<CheckboxComponent | { ngModel: boolean }> = (
  args: CheckboxComponent | { ngModel: boolean }
) => ({
  component: CheckboxComponent,
  props: args,
});

export const True = Template.bind({});
True.args = {
  ngModel: true,
};

export const False = Template.bind({});
False.args = {
  ngModel: false,
};
