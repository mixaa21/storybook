import type { Preview } from "@storybook/vue3";

// .storybook/preview.js
import { setup } from "@storybook/vue3";
import * as registerPlugins from "../src/plugins/vuetify/index";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives
})

setup((app) => {
  // Registers your app's plugins into Storybook
  app.use(vuetify)
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
