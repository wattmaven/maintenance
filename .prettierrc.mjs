/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-svelte", "prettier-plugin-organize-imports"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
