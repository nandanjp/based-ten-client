import { z } from "zod";

const listType = z.enum(["anime", "songs", "movies", "videogames"]);

const animeSchema = z.object({
  id: z.number(),
  title: z.string(),
  mediaimage: z.string(),
  numepisodes: z.number(),
  createdon: z.date().optional(),
});

const animeQuerySchema = z.object({
  title: z.string().optional(),
  num_episodes: z.number().optional(),
  page: z.number().positive().default(0),
  limit: z.number().positive().default(100),
  sort_key: z.enum(["numepisodes", "title"]).optional(),
});

const gameSchema = z.object({
  id: z.number(),
  title: z.string(),
  mediaimage: z.string(),
  console: z.string(),
  createdon: z.date().optional(),
});

const gameQuerySchema = z.object({
  title: z.string().optional(),
  console: z.string().optional(),
  page: z.number().positive().default(0),
  limit: z.number().positive().default(100),
  sort_key: z.enum(["title", "console"]).optional(),
});

const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  mediaimage: z.string(),
  createdon: z.date().optional(),
});

const movieQuerySchema = z.object({
  title: z.string().optional(),
  page: z.number().positive().default(0),
  limit: z.number().positive().default(100),
  sort_key: z.enum(["title"]).optional(),
});

const songSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  album: z.string(),
  mediaimage: z.string(),
  createdon: z.date().optional(),
});

const songQuerySchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  page: z.number().positive().default(0),
  limit: z.number().positive().default(100),
  sort_key: z.enum(["author", "title"]).optional(),
});

const mediaSchema = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  mediaimage: z.string().optional(),
  createdon: z.date().optional(),
  type: listType,
});

const mediaQuerySchema = z.object({
  title: z.string().optional(),
  media_type: listType.optional(),
  page: z.number().positive().default(0),
  limit: z.number().positive().default(100),
  sort_key: z.enum(["title", "type"]).optional(),
});

const userSchema = z.object({
  email: z.string(),
  username: z.string(),
  userpassword: z.string(),
  createdat: z.date().optional(),
});

const listSchema = z.object({
  username: z.string(),
  listname: z.string(),
  rankinginlist: z.number().positive(),
  itemid: z.number(),
  title: z.string(),
  media_image: z.string(),
  createdon: z.date().optional(),
  likes: z.number().optional(),
  listtype: listType,
});

const animeListSchema = listSchema.and(
  z.object({
    numepisodes: z.number().positive(),
  })
);

const movieListSchema = listSchema;

const gameListSchema = listSchema.and(
  z.object({
    console: z.string(),
  })
);

const songListSchema = listSchema.and(
  z.object({
    author: z.string(),
    album: z.string(),
  })
);

export interface ApiResponseType<T> {
  success: boolean;
  response: T;
  error?: string;
}

export interface ApiListResponseType<T> {
  success: boolean;
  response: Array<T>;
  error?: string;
}

export type AnimeType = z.infer<typeof animeSchema>;
export type AnimeQueryType = z.infer<typeof animeQuerySchema>;
export type MovieType = z.infer<typeof movieSchema>;
export type MovieQueryType = z.infer<typeof movieQuerySchema>;
export type SongType = z.infer<typeof songSchema>;
export type SongQueryType = z.infer<typeof songQuerySchema>;
export type GameType = z.infer<typeof gameSchema>;
export type GameQueryType = z.infer<typeof gameQuerySchema>;
export type MediaType = z.infer<typeof mediaSchema>;
export type MediaQueryType = z.infer<typeof mediaQuerySchema>;
export type UserType = z.infer<typeof userSchema>;
export type ListType = z.infer<typeof listSchema>;
export type AnimeListType = z.infer<typeof animeListSchema>;
export type MovieListType = z.infer<typeof movieListSchema>;
export type GameListType = z.infer<typeof gameListSchema>;
export type SongListType = z.infer<typeof songListSchema>;

export type AnimeResponseType = ApiResponseType<AnimeType>;
export type AnimeListResponseType = ApiListResponseType<AnimeType>;
export type MovieResponseType = ApiResponseType<MovieType>;
export type MovieListResponseType = ApiListResponseType<MovieType>;
export type SongResponseType = ApiResponseType<SongType>;
export type SongListResponseType = ApiListResponseType<SongType>;
export type GameResponseType = ApiResponseType<GameType>;
export type GameListResponseType = ApiListResponseType<GameType>;
export type MediaResponseType = ApiResponseType<MediaType>;
export type MediaListResponseType = ApiListResponseType<MediaType>;
