import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        destination1: resolve(__dirname, "pages/destination/destination-moon.html"),
        destination2: resolve(__dirname, "pages/destination/destination-mars.html"),
        destination3: resolve(__dirname, "pages/destination/destination-europa.html"),
        destination4: resolve(__dirname, "pages/destination/destination-titan.html"),
        crew1: resolve(__dirname, "pages/crew/crew-commander.html"),
        crew2: resolve(__dirname, "pages/crew/crew-specialist.html"),
        crew3: resolve(__dirname, "pages/crew/crew-pilot.html"),
        crew4: resolve(__dirname, "pages/crew/crew-engineer.html"),
        technology1: resolve(__dirname, "pages/technology/technology-vehicle.html"),
        technology2: resolve(__dirname, "pages/technology/technology-spaceport.html"),
        technology3: resolve(__dirname, "pages/technology/technology-capsule.html"),
      },
    },
  },
});
