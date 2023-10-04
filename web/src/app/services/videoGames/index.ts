import { API_URL } from "../../config";
import { VideoGamesAPIResponse } from "./types";
import { mapVideoGamesAPIResponseToVideoGames } from "./mappings";
import { VideoGame } from "@/types/videoGame";
import { Pagination } from "@/types/pagination";

interface GetGamesResponse {
  data: VideoGame[];
  pagination: Pagination;
}

export async function getGames({ page = 1 }): Promise<GetGamesResponse> {
  const res = await fetch(
    `${API_URL}/video-games?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=1`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const response: VideoGamesAPIResponse = await res.json();
  const { meta } = response;
  const { pagination } = meta;
  const mappedData = mapVideoGamesAPIResponseToVideoGames(response);

  return { data: mappedData, pagination };
}
