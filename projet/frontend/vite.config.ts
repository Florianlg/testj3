import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({mode}) => {
  // On charge les variables d'environnement à partir du docker-compose et à défaut du fichier .env
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react()],
    server: {
      host: true,
      // On utilise le polling pour que le hot reload fonctionne avec docker
      watch: {
        usePolling: true
      },
    }
  })
}
