import { VideoGame } from "@/types/videoGame";
import { VideoGamesAPIResponse } from "./types";
import { IMAGE_URL } from "@/app/config";

export const mapVideoGamesAPIResponseToVideoGames = (
  videoGamesAPIResponse: VideoGamesAPIResponse
): VideoGame[] => {
  const { data } = videoGamesAPIResponse;

  return data.map((videoGameAPIResponse) => {
    const { id, attributes } = videoGameAPIResponse;
    const { title, launch, description, slug, cover, platforms } = attributes;

    return {
      id,
      title,
      launch,
      description,
      slug,
      cover: `${IMAGE_URL}${cover.data.attributes.url}`,
      platforms: platforms.data.map((platform) => platform.attributes.name),
    };
  });
};
