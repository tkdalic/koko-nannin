// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { MatToolbarModule } from '@angular/material/toolbar';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PageLayoutComponent } from 'src/app/templates/page-layout/page-layout.component';

export default {
  title: 'PageLayout',
  component: PageLayoutComponent,
  decorators: [
    moduleMetadata({
      declarations: [PageLayoutComponent],
      imports: [MatToolbarModule],
    }),
  ],
} as Meta;

const Template: Story<PageLayoutComponent> = (args: PageLayoutComponent) => ({
  component: PageLayoutComponent,
  props: args,
  template: `
  <app-page-layout>
  <div header> Header!!</div>
  <div body> Body!!</div>
  </app-page-layout>
  `
});

export const PageLayout = Template.bind({});
PageLayout.args = {};
