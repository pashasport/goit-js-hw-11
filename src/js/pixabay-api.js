import axios from 'axios';

BASE_URL = 'https://pixabay.com/api/';
API_KEY = '38290525-911726ad1b6a7f076609ffcd1';

export async function fetchPhoto(q, page, perPage) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await axios.get(url);
  return response.data;
}
