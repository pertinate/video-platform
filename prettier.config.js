/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tabWidth: 4,
  useTabs: false,
  printWidth: 120,
  semi: true,
  trailingComma: "none",
};

export default config;
