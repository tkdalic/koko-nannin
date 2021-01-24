// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatToolbarModule } from '@angular/material/toolbar';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'src/app/parts/header/header.component';

export default {
  title: 'Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const Header = Template.bind({});
Header.args = {};
