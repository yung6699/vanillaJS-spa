const API_ENDPOINT =  `https://yts.mx/api/v2`;

async function fetchInstance (url, options = {}) {
  const response = await fetch(url, { ...options });
  if (response.ok) return response.json();
  throw new Error("HTTP-Error: " + response.status);
}

export function fetchMovies ({ limit = 20, pageNum }) {
  const url = `${API_ENDPOINT}/list_movies.json?limit=${limit}&pageNum=${pageNum}`;
  return fetchInstance(url)
}
