import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Usa features modernas do browser (mais rápido)
    minify: 'terser', // Minificação agressiva
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa as bibliotecas pesadas do teu código principal
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['lucide-react'],
          // Se usares Framer Motion, descomenta esta linha:
          // 'vendor-anim': ['framer-motion'],
        },
      },
    },
    // Aumenta o limite de aviso para não te chatear com chunks grandes
    chunkSizeWarningLimit: 1000,
  },
});
