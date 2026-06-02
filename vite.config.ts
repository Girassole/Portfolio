import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Mantén esto aquí para que GitHub Pages encuentre bien las rutas
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ]
})