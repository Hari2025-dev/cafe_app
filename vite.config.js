import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define:{
  //   'process.env.REACT_APP_SUPABASE_URL': JSON.stringify(process.env.VITE_REACT_APP_SUPABASE_URL),
  //   'process.env.REACT_APP_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_NREACT_APP_SUPABASE_ANON_KEY),
  // }
})
