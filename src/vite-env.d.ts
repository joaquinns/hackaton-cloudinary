/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_UPLOAD_URL_CLD: string
  readonly VITE_CLOUD_NAME_CLD: string
  readonly VITE_UPLOAD_PRESET_CLD: string
  readonly VITE_API_KEY_CLD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
