import config  from "./constant";

const fetchData = async (path: string) => {
  try {
    const response = await fetch(`${config.BASE_URL}${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};

export const getTrending = async (mediaType: string) => {
  const path = `/trending/${mediaType}/week?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getTopRated = async (mediaType: string) => {
  const path = `/${mediaType}/top_rated?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getDetails = async (mediaType: string, id: string) => {
  const path = `/${mediaType}/${id}?api_key=${config.API_KEY}&language=pt-BR`;
  return fetchData(path);
};

export const getMoviesByGenre = async (genreId: number) => {
  const path = `/discover/movie?api_key=${config.API_KEY}&with_genres=${genreId}`;
  return fetchData(path);
};

export const getTVShowsByGenre = async (genreId: number) => {
  const path = `/discover/tv?api_key=${config.API_KEY}&with_genres=${genreId}`;
  return fetchData(path);
};



export const categories = [
  {
    name: "trending",
    title: "Em alta",
    mediaType: "movie",
    fetchData: await getTrending("all"),
  },
  {
    name: "trendingMovie",
    title: "Filmes Em alta",
    fetchData: await getTrending("movie"),
  },
  {
    name: "trendingMovie",
    title: "Series Em alta",
    fetchData: await getTrending('tv'),
  },
  {
    name: "topRatedMovie",
    title: "Filmes Mais bem avaliados",
    fetchData: await getTopRated(`movie`),
  },
  {
    name: "topRatedTv",
    title: "Series Mais bem avaliadas",
    mediaType: "tv",
    fetchData: await getTopRated(`tv`),
  },
  {
    name: "comedy",
    title: "Filmes de Comedia",
    movies: await getMoviesByGenre(35),
  },
  {
    name: "acao",
    title: "Filmes de Ação",
    movies: await getMoviesByGenre(28),
  },
  {
    name: "romances",
    title: "Filmes de Romances",
    movies: await getMoviesByGenre(10749),
  },
  {
    name: "documentaries",
    title: "Documentários",
    movies: await getMoviesByGenre(99),
  },

];

