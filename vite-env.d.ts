/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MSAL_PROJECT_ID: string;
  readonly VITE_MSAL_AUTHORITY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
