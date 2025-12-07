import nextTs from "eslint-config-next/typescript";
import perfectionist from "eslint-plugin-perfectionist";
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      perfectionist,
    },
    settings: {
      perfectionist: {
        type: "line-length",
      },
    },
    rules: {
      "import/order": "off",
      "sort-imports": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          type: "line-length",
          order: "asc",
          newlinesBetween: 1, // blank line between groups
          groups: [
            ["type-import", "value-builtin", "value-external"],
            ["type-internal", "value-internal"],
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "side-effect",
            "style",
            "unknown",
          ],
          tsconfig: {
            rootDir: ".", // Consider "@/..." as internal
          },
        },
      ],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
