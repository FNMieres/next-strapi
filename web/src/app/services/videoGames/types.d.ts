import { Pagination } from "@/types/pagination";

export interface VideoGamesAPIResponse {
  data: VideoGamesAPIResponseDatum[];
  meta: Meta;
}

export interface VideoGamesAPIResponseDatum {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  launch: Date;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  platforms: Platforms;
  cover: Cover;
}

export interface Cover {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  url: string;
}

export interface Platforms {
  data: PlatformsDatum[];
}

export interface PlatformsDatum {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
}

export interface Meta {
  pagination: Pagination;
}
