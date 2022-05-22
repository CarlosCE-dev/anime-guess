// To parse this data:
//
//   import { Convert, AnimeResponse } from "./file";
//
//   const animeResponse = Convert.toAnimeResponse(json);

export interface AnimeResponse {
    data: Anime;
}

export interface Anime {
    mal_id:          number;
    url:             string;
    images:          Images;
    title:           string;
    title_english:   string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            string;
    source:          string;
    episodes:        null;
    status:          string;
    airing:          boolean;
    aired:           Aired;
    duration:        string;
    rating:          string;
    score:           null;
    scored_by:       null;
    rank:            null;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        string;
    background:      null;
    season:          string;
    year:            number;
    genres:          Genre[];
    explicit_genres: any[];
}

export interface Aired {
    from:   Date;
    to:     null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export interface Genre {
    mal_id: number;
    type:   string;
    name:   string;
    url:    string;
}

export interface Images {
    jpg: Jpg;
}

export interface Jpg {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}