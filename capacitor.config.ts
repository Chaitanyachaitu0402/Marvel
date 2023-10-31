import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.marvel.marvel',
  appName: 'Marvel',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
