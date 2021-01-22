// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AppModule } from 'src/app/app.module';
import { CheckboxListItemComponent } from 'src/app/parts/checkbox-list-item/checkbox-list-item.component';
import { CheckboxComponent } from 'src/app/parts/checkbox/checkbox.component';

export default {
  title: 'CheckboxListItem',
  component: CheckboxListItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent],
      imports: [FormsModule, MatCheckboxModule],
    }),
  ],
} as Meta;

const Template: Story<CheckboxListItemComponent> = (
  args: CheckboxListItemComponent
) => ({
  component: CheckboxListItemComponent,
  props: args,
});

export const Item = Template.bind({});
Item.args = {
  value: false,
  label: '兵庫県'
};
