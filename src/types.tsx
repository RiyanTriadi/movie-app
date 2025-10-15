export interface TMDbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string; 
  release_date: string;
  vote_average: number;
}

export interface TMDbApiResponse {
  page: number;
  results: TMDbMovie[]; 
  total_pages: number;
  total_results: number;
}
