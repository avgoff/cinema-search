export interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // Добавляем другие переменные, если нужно
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
