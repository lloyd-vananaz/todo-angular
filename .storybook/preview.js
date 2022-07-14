import { moduleMetadata } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { CommonModule } from "@angular/common";

// import { moduleDeclarations } from "../src/app/app.component";

import { AlertsComponent } from "../src/app/components/molecules/alerts/alerts.component";
import { ListComponent } from "../src/app/components/organisms/list/list.component";
import { TopBarComponent } from "../src/app/components/organisms/top-bar/top-bar.component";

import docJson from "../documentation.json";

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};

export const decorators = [
  moduleMetadata({
    declarations: [AlertsComponent, ListComponent, TopBarComponent],
    imports: [CommonModule],
  }),
];
