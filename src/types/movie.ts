import { Genre } from "./genre";

export type Movie = {
  id: number;
  name: string;
  year?: number;
  poster?: {
    url?: string;
    previewUrl?: string;
  };
  description?: string;
  genres?: Genre[];
};


  