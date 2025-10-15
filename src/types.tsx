export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
}

export interface ApiResponse {
  Search: Movie[];
  totalSearch: string;
  Response: string;
}
