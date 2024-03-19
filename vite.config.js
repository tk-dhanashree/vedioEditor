import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import gltfPlugin from 'vite-plugin-gltf';

export default defineConfig({
  plugins: [react(), gltfPlugin()]
});
