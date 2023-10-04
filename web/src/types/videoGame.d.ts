export interface VideoGame {
  id: number;
  title: string;
  description: string;
  slug: string;
  launch: Date;
  cover: string;
  platforms: string[];
}