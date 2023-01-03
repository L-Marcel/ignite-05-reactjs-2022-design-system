module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/client-api"
  ],
  "framework": "@storybook/react",
  core: {
    builder: 'webpack5',
  },
  "features": {
    "storyStoreV7": true
  }
}