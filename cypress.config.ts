import { clerkSetup } from "@clerk/testing/cypress";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return clerkSetup({ config });
    },
    baseUrl: "http://localhost:3000",
    video: false,
  },
});
