const API_ENDPOINT =  `https://yts.mx/api/v2`;

async function fetchInstance (url, options = {}) {
  const response = await fetch(url, { ...options });
  if (response.ok) return response.json();
  throw new Error("HTTP-Error: " + response.status);
}

export function fetchMoviesByGenre ({ limit = 20, pageNum, genre = '' }) {
  const url = `${API_ENDPOINT}/list_movies.json?sort_by=year&limit=${limit}&pageNum=${pageNum}&genre=${genre}`;
  return fetchInstance(url)
}
