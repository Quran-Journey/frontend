const BASE_API_URL = "https://api.offlinequran.com/api";

function buildUrl(url: String): string {
  return `${BASE_API_URL}${url}`;
}

export default buildUrl;