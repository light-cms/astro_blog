import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://light-cms.github.io/",
  base: "/astro_blog",
  integrations: [
    starlight({
      title: "Astro Blog",
      description: "A basic displayable Astro Starlight boilerplate.",
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "Start Here", items: ["intro"] },
        { label: "Blog", autogenerate: { directory: "blog" } },
      ],
    }),
  ],
});
