module.exports = {
  plugins: ["prettier-plugin-astro", "@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react", // React imports
    "^@winnie-ui/react", // Winnie UI imports
    "^@winnie-ui/icons", // Winnie UI imports
    "<THIRD_PARTY_MODULES>",
    "^~/", // Absolute imports (if you use path aliases)
    "^[./](?!.*\\.css$)", // Relative imports (excluding CSS)
    ".*\\.css$", // CSS imports last
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: ["*.ts"],
      options: {
        parser: "babel-ts",
      },
    },
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.css"],
      options: {
        printWidth: 300,
      },
    },
  ],
};
