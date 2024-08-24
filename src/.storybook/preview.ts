import type { Preview } from "@storybook/react";
import "../resources/css/app.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

global.route = (name, params, absolute) => {
  // 必要に応じて適切なURLを返すように調整する
  return `/${name}`;
};

export default preview;
