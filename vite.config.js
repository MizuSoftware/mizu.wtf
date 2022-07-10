import svg from "@poppanator/sveltekit-svg";

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    svg({
      type: "src",
    }),
  ],
};

export default config;
