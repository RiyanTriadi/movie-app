export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ApiSearchResponse {
  Search: Movie[];
  totalResult: string;
  Response: string;
  Error?: string;
}
