import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jonasiw.nl",
  integrations: [ tailwind(), ],
  redirects: {
    "/resume": "/Jonas_Groening_resume.pdf",
    "/listen": "https://github.com/jonasiwnl/listen",
  },
});
