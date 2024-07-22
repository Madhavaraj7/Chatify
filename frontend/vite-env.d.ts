interface ImportMetaEnv {
    VITE_API_URL: string;
    // other env variables
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  