import {defineConfig} from "vite";
import rollupPluginNatives from 'rollup-plugin-natives';

export default defineConfig({
  plugins: [rollupPluginNatives({
    copyTo: 'node-natives'
  })]
})