// @ts-check

import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightThemeExquisitus from "starlight-theme-exquisitus";

export default defineConfig({
  site: "https://light-cms.github.io/",
  base: "/astro_blog",
  compressHTML: true,
  integrations: [
    starlight({
      title: "Astro Blog",
      description: "A basic displayable Astro Starlight boilerplate.",
      customCss: ["./src/styles/global.css", "./src/styles/custom.css"],
      components: {
        Footer: "./src/components/Footer.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/light-cms/astro_blog",
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: { name: "author", content: "Astro Blog" },
        },
        {
          tag: "meta",
          attrs: { property: "og:type", content: "website" },
        },
        {
          tag: "meta",
          attrs: { property: "og:site_name", content: "Astro Blog" },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:card", content: "summary_large_image" },
        },
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        },
      ],
      plugins: [starlightThemeExquisitus()],
      pagefind: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "esbuild",
      cssMinify: true,
    },
    esbuild: {
      legalComments: "none",
      minifyWhitespace: true,
      minifyIdentifiers: true,
      minifySyntax: true,
    },
  },
});
